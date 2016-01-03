R.div {'class': 'row'}, [
  R.div {'class': 'col-md-offset-4 col-md-4 col-xs-12'}, [
    R.a {'class': 'btn btn-primary btn-lg btn-block', 'ui-sref': 'characters.detail.new'}, [
      R.strong {}, [
        "Create New Character"
      ]
    ]
  ]
]
R.div {'class': 'row'}, [
  R.div {'class': 'col-md-12'}, [
    R.ul {'class': 'list-unstyled', 'id': 'character_list'}, [
      R.li {'ng-repeat': 'character in characters'}, [
        R.button {'class': 'btn btn-default btn-xs delete-character', 'ng-click': 'delete_character(character)'}, [
          "                    ×"
        ]
        R.a {'ui-sref': 'characters.detail.existing.view({guid: character._id})'}, [
          R.span {'ng-if': 'character.character_name'}, [
            "                    {{ character.character_name }}"
          ]
          R.span {'ng-if': '!character.character_name'}, [
            "                        (unnamed character)"
          ]
        ]
      ]
    ]
  ]
]
