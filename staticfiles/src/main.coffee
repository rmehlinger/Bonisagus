{R, rx, $, bind} = require './deps.coffee'
{context} = require './routing.coffee'
{characterList} = require './templates/characters-list.coffee'
{characterPage} = require './templates/character-template.coffee'
util = require './util.coffee'

main = -> R.div {class: 'container'}, rx.flatten [
  R.header {id:"ars-header", class: 'row'}, R.div {class: 'col-sm-12'}, [
    R.h1 R.a {href: "#/characters"}, "Bonisagus"
    R.h4 "An Ars Magica Gameplay Assistant"
  ]
  bind ->
    if context.curCharacter.get() then characterPage context.curCharacter.get()
    else characterList context.charactersList, context.addCharacter
  R.footer {class: 'row'}, R.div {
    class: "copyright-disclaimer col-sm-offset-3 col-sm-6"
  }, R.small [
    R.p "Ars Magica © 2004-2016 Trident, Inc. d/b/a Atlas Games."
    R.p [
      "Ars Magica, Mythic Europe, Covenants, and Charting New Realms of Imagination are trademarks of "
      "Trident, Inc. Order of Hermes, Tremere, and Doissetep are trademarks of White Wolf, Inc."
    ]
    R.p [
      "Use of these copyrights and trademarks is done here without permission, and does not constitute "
      "a challenge to their ownership."
    ]
    R.p [
      "Bonisagus is open source software, published under the "
      R.a {href: "http://opensource.org/licenses/MIT"}, "MIT License"
      ". Find and contribute to "
      R.a {ref: "https://github.com/rmehlinger/Bonisagus"}, "our source code"
      " on GitHub."
    ]
  ]
]

$('body').append main()
