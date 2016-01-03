{rx, snap, _, bind, rxStorage} = require './deps.coffee'
{Character, defaultCharacterMap} = require './classes/character.coffee'
util = require './util.coffee'

exports = module.exports = {}

exports.ROUTES = ROUTES = {
  HOME: 'HOME'
  CHARS: 'CHARS'
  CHAR_LIST: 'CHAR_LIST'
  CHAR_DETAIL: 'CHAR_DETAIL'
  CHAR_DEFAULT: 'CHAR_DEFAULT'
  CHAR_EDIT: 'CHAR_EDIT'
  CHAR_HISTORY: 'CHAR_HISTORY'
  CHAR_LABORATORY: 'CHAR_LABORATORY'
  CHAR_SPELLS: 'SPELLS'
  CHAR_ITEMS: 'ITEMS'
  USERS: 'USERS'
  USERS_LIST: 'USERS_LIST'
  USER_DETAIL: 'USER_DETAIL'
}

exports.TABS = TABS = {
  SUMMARY: "SUMMARY"
  EDIT: "EDIT"
  HISTORY: "HISTORY"
  LABORATORY: "LABORATORY"
  SPELLS: "SPELLS"
  ITEMS: "ITEMS"
}

routes = [
  {frag: '', to: ROUTES.HOME, children: [
    {
      frag: '/characters', to: ROUTES.CHARS, children: [
        {frag: '', to: ROUTES.CHAR_LIST}
        {frag: '/:id', to: ROUTES.CHAR_DETAIL, children: [
          {frag: '', to: ROUTES.CHAR_DEFAULT}
          {frag: '/edit', to: ROUTES.CHAR_EDIT}
          {frag: '/history', to: ROUTES.CHAR_HISTORY}
          {frag: '/laboratory', to: ROUTES.CHAR_LABORATORY}
          {frag: '/spells', to: ROUTES.CHAR_SPELLS}
          {frag: '/items', to: ROUTES.CHAR_ITEMS}
        ]}
      ]
    }
    {
      frag: '/users', to: ROUTES.USERS, children: [
        {frag: '', to: ROUTES.USERS_LIST}
        {frag: '/:user', to: ROUTES.USER_DETAIL}
      ]
    }
  ]}
]

mapFn = (routes) -> (match) ->
  routes.map ({frag, to, children}) ->
    if not children then match(frag).to(to)
    else match(frag).to(to, mapFn children)

class RxRouter
  constructor: (routes, enter=(->), exit=(->), model=(->)) ->
    _routesPath = rx.array []
    _routesCells = {}

    bind -> _routesPath.all()

    buildCells = (r) -> r.forEach ({to, children}) ->
      _routesCells[to] = {
        active: rx.cell false
        args: rx.map {}
      }
      buildCells children ? []

    buildCells routes

    _routesArgs = _.mapObject _routesCells, ({args}) ->
      rx.cellToMap bind -> args.all()

    router = new Router['default']()
    router.map mapFn routes

    router.getHandler = _.memoize (name) -> {
      enter: ->
        _routesCells[name].active.set true
        _routesPath.push name
        enter()
      model: (args) ->
        _routesCells[name].args.update args
        model()
      exit: ->
        _routesCells[name].active.set false
        _routesCells[name].args.update {}
        _routesPath.removeAt -1
        exit()
      events: error: (err) ->
        console.error err?.stack
    }

    onStateChange = => router.handleURL History.getState().hash

    History.Adapter.bind window, 'statechange', -> onStateChange()
    @updateURL = router.updateURL = (url) ->
      History.pushState url, null, url
    @replaceURL = router.replaceURL = (url) ->
      History.replaceState url, null, url

    @generate = router.generate

    onStateChange()

    @path = _routesPath.map _.identity

    @isActive = rx.cellToMap bind ->
      _.mapObject _routesCells, ({active}) -> active.get()

    @args = (route) -> _routesArgs[route]

class Context
  constructor: (@router) ->
    charKey = (id) => "characters/#{id}"
    historyKey = (id) => "histories/#{id}"
    labKey = (id) => "labs/#{id}"
    spellKey = (id) => "spells/#{id}"
    itemKey = (id) => "items/#{id}"
    @curCharID = bind => @router.args(ROUTES.CHAR_DETAIL).get 'id'
    @charactersList = rx.cellToArray bind =>
      rxStorage.local.getItemBind('charactersList').get() ? []
    @curCharTab = bind =>
      if @router.isActive.get ROUTES.CHAR_DEFAULT then TABS.SUMMARY
      else if @router.isActive.get ROUTES.CHAR_EDIT then TABS.EDIT
      else if @router.isActive.get ROUTES.CHAR_HISTORY then TABS.HISTORY
      else if @router.isActive.get ROUTES.CHAR_LABORATORY then TABS.LABORATORY
      else if @router.isActive.get ROUTES.CHAR_SPELLS then TABS.SPELLS
      else if @router.isActive.get ROUTES.CHAR_ITEMS then TABS.ITEMS
    @curCharacter = bind =>
      curId = @curCharID.get()
      if @router.isActive.get ROUTES.CHAR_DETAIL then new Character(
        rx.map rxStorage.local.getItem(charKey curId)
        rx.array rxStorage.local.getItem(historyKey curId)
        rx.map rxStorage.local.getItem(labKey curId)
        rx.array rxStorage.local.getItem(spellKey curId)
        rx.array rxStorage.local.getItem(itemKey curId)
      )
      else null
    @addCharacter = =>
      charList = rxStorage.local.getItem('charactersList') ? []
      id = charList.length
      charList = charList.concat {id, name: '(new character)'}
      rxStorage.local.setItem 'charactersList', charList
      rxStorage.local.setItem charKey(id), defaultCharacterMap(id)
      rxStorage.local.setItem historyKey(id), []
      rxStorage.local.setItem labKey(id), {}
      rxStorage.local.setItem spellKey(id), []
      rxStorage.local.setItem itemKey(id), []
    @saveCharacter = (charMap) =>
      snap => rxStorage.local.setItem charKey(@curCharID.get()), charMap
      snap => @curCharacter.get().charMap.update charMap
    @saveLaboratory = (laboratory) =>
      rxStorage.local.setItem labKey(@curCharID.get()), laboratory
      @curCharacter.get().labMap.update laboratory
    @saveHistory = (history) =>
      snap => rxStorage.local.setItem historyKey(@curCharID.get()), history
      snap => @curCharacter.get().history.update history
    @saveSpells = (spells) =>
      snap => rxStorage.local.setItem spellKey(@curCharID.get()), spells
      snap => @curCharacter.get().spells.update spells
    @saveitems = (items) =>
      snap => rxStorage.local.setItem itemKey(@curCharID.get()), items
      snap => @curCharacter.get().items.update items
exports.context = new Context new RxRouter routes
