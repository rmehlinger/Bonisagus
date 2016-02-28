{R, rx} = require '../deps.coffee'

exports.characterList = (idsArray, addCharacter) -> R.div [
  R.div {class: 'row'}, rx.flatten [
    idsArray.map ({id, name}) -> R.div {class: 'col-xs-3'}, R.a {
      href: "#/characters/#{id}"
    }, name
  ]
  R.div {class: 'col-xs-3 col-xs-offset-9'}, R.button {
    click: (event) -> addCharacter()
    class: 'btn btn-primary'
  }, 'Add Character'
]
