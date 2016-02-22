{R, rx, bind, _, _str} = require '../../deps.coffee'
{VIRTUES_LIST} = require '../../data/virtues_list.coffee'
{FLAWS_LIST} = require '../../data/flaws_list.coffee'
util = require '../../util.coffee'

exports = module.exports = {}

itemGroups = _.groupBy VIRTUES_LIST, ({magnitude, virtue_type}) ->
  "#{virtue_type} #{magnitude}"

exports.virtuesSection = (character) ->
  genericSection character.virtues, VIRTUES_LIST, "virtue"

exports.flawsSection = (character) ->
  genericSection character.flaws, FLAWS_LIST, "flaw"

genericSection = (itemArray, masterList, itemType) ->
  itemGroupFn = ({magnitude, type}) -> "#{type}, #{magnitude}"
  itemGroups = _.chain masterList
                .groupBy itemGroupFn
                .pairs()
                .map ([group, items]) -> {group, items}
                .value()

  $itemTracker = R.input {
    type: 'hidden'
    name: "#{itemType}s:array"
    value: JSON.stringify rx.snap -> itemArray.all()
  }

  selectedItems = bind -> JSON.parse $itemTracker.rx('val').get()

  itemBooks = _.chain masterList
    .pluck 'book'
    .uniq()
    .sortBy (book) ->
      if book == 'Ars Magica, Fifth Edition' then ''
      else book
    .value()

  $bookSelect = R.select {class: 'form-control', id: "#{itemType}-book"},
    itemBooks.map (book) -> R.option {value: book}, book

  selectedVirtue = (virtue, i) -> R.li [
    R.button {
      class: 'btn btn-xs btn-default'
      type: 'button'
      click: ->
        v = rx.snap -> selectedItems.get()
        v.splice i, 1
        $itemTracker.val(JSON.stringify v).change()
    }, R.span {
      class: 'glyphicon glyphicon-minus'
      title: "Remove #{itemType}"
    }
    if virtue.magnitude == 'Major' then R.strong " #{virtue.name}"
    else " #{virtue.name}"
  ]

  return R.div [
    $itemTracker
    R.div {class: 'row'}, bind ->
      traits = selectedItems.get()
      if traits.length <= 6 then R.div {class: 'col-sm-12'},
        R.ul {class: 'selected-traits list-unstyled'}, bind -> traits.map (trait, i) ->
          selectedVirtue trait, i
      else [
        traits[0..traits.length/2]
        traits[traits.length/2 + 1..-1]
      ].map (list, half) -> R.ul {class: "col-sm-6 list-unstyled selected-traits"},
        list.map (trait, i) ->
          selectedVirtue trait, half * (traits.length/2 + 1) + i

    R.div {class: 'form-group'}, [
      R.label {for: $bookSelect.prop 'id'}, "Filter by book"
      $bookSelect
    ]
    R.div {class: 'items-wrapper'}, bind ->
      itemGroups.map ({group, items}) ->
        curBookItems = _.where(items, {book: $bookSelect.rx('val').get()})
        if curBookItems?.length then R.div [
          R.h4 group
          R.ul {class: 'list-unstyled'}, curBookItems.map (item) -> R.li [
            R.button {
              class: 'btn btn-xs btn-default'
              type: 'button'
              click: ->
                v = rx.snap -> selectedItems.get()
                v.push item
                $itemTracker.val(JSON.stringify v).change()
            }, R.span {
              class: 'glyphicon glyphicon-plus'
              title: "Add #{itemType}"
            }
            " "
            item.name
          ]
        ]
        else ''
  ]
