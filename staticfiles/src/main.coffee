{$, R, _, bind} = require './deps.coffee'
{characterForm} = require './templates/character.coffee'

$('body').append R.div {class: 'container'}, [
  R.header {id:"ars-header", class: 'row'}, R.div {class: 'col-md-12'}, [
    R.h1 R.a {href:"#/characters/list"}, "Bonisagus"
    R.h4 "An Ars Magica Gameplay Assistant"
  ]
  characterForm {}
  R.footer {class: "copyright-disclaimer col-md-offset-3 col-md-6"}, R.small [
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
