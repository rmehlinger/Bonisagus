{R, rx, bind, _} = require '../../deps.coffee'
exports = module.exports = {}

exports.descriptionEditor = (character) ->
  description = rx.snap -> character.description.get() ? {}

  return R.div [
    R.div {class: 'row'}, [
      R.div {class: 'col-sm-4 col-md-3 form-group'}, [
        R.label {class: 'control-label', for: 'birth_name'}, "Birth Name"
        R.input {
          class: 'form-control'
          type: 'text'
          id: 'birth_name'
          name: 'description[birth_name]'
          value: description.birth_name
        }
      ]
      R.div {class: 'col-sm-4 col-md-3 form-group'}, [
        R.label {class: 'control-label', for: 'gender'}, "Gender"
        R.input {
          class: 'form-control'
          type: 'text'
          id: 'gender'
          name: 'description[gender]'
          value: description.gender
        }
      ]
      R.div {class: 'col-sm-4 col-md-3 form-group'}, [
        R.label {class: 'control-label', for: 'nationality'}, "Nationality"
        R.input {
          class: 'form-control'
          type: 'text'
          id: 'nationality'
          name: 'description[nationality]'
          value: description.nationality
        }
      ]
      R.div {class: 'col-sm-4 col-md-3 form-group'}, [
        R.label {class: 'control-label', for: 'place_origin'}, "Place of Origin"
        R.input {
          class: 'form-control'
          type: 'text'
          id: 'place_origin'
          name: 'description[place_origin]'
          value: description.place_origin
        }
      ]
    ]
    R.div {class: 'row'}, [
      R.div {class: 'col-sm-4 col-md-3 form-group'}, [
        R.label {class: 'control-label', for: 'religion'}, "Religion"
        R.input {
          id: 'religion'
          name: 'description[religion]'
          type: 'text'
          class: 'form-control'
          value: description.religion
        }
      ]
      R.div {class: 'col-sm-4 col-md-3 form-group'}, [
        R.label {class: 'control-label', for: 'profession'}, "Profession"
        R.input {
          class: 'form-control'
          type: 'text'
          id: 'profession'
          name: 'description[profession]'
          value: description.profession
        }
      ]
      R.div {class: 'col-sm-4 col-md-3 form-group'}, [
        R.label {class: 'control-label', for: 'title'}, "Title"
        R.input {
          id: 'title'
          name: 'description[title]'
          type: 'text'
          class: 'form-control'
          placeholder: 'e.g. Baron de Montferrat'
          value: description.title
        }
      ]
      R.div {class: 'col-sm-2 form-group'}, [
        R.label {class: 'control-label', for: 'handedness'}, "Handedness"
        R.select {
          class: 'form-control'
          id: 'handedness'
          name: 'description[handedness]'
          value: description.handedness
        }, [
          R.option {value: 'right'}, "right"
          R.option {value: 'left'}, "left"
          R.option {value: 'ambidextrous'}, "ambidextrous"
        ]
      ]
    ]
    R.div {class: 'row'}, [
      R.div {class: 'col-sm-3 col-md-2 form-group'}, [
        R.label {class: 'control-label', for: 'height'}, "Height"
        R.input {
          id: 'height'
          name: 'description[height]'
          type: 'text'
          class: 'form-control'
          value: description.height
        }
      ]
      R.div {class: 'col-sm-3 col-md-2 form-group'}, [
        R.label {class: 'control-label', for: 'weight'}, "Weight"
        R.input {
          id: 'weight'
          name: 'description[weight]'
          type: 'text'
          class: 'form-control'
          value: description.weight
        }
      ]
      R.div {class: 'col-sm-2 form-group'}, [
        R.label {class: 'control-label', for: 'hair'}, "Hair"
        R.input {
          class: 'form-control'
          type: 'text'
          id: 'hair'
          name: 'description[hair]'
          value: description.hair
        }
      ]
      R.div {class: 'col-sm-2 form-group'}, [
        R.label {class: 'control-label', for: 'eyes'}, "Eyes"
        R.input {
          class: 'form-control'
          type: 'text'
          id: 'eyes'
          name: 'description[eyes]'
          value: description.eyes
        }
      ]
    ]
    R.div {class: 'row'}, [
      R.div {class: 'form-group col-md-12'}, [
        R.label {class: 'control-label', for: 'physical_description'},
          "Physical Description"
        R.textarea {
          class: 'form-control'
          id: 'physical_description'
          rows: 3
          name: 'description[physical_description]'
          value: description.physical_description
        }
      ]
      R.div {class: 'form-group col-md-12'}, [
        R.label {class: 'control-label', for: 'backstory'}, "Backstory"
        R.textarea {
          class: 'form-control'
          id: 'backstory'
          rows: 3
          name: 'description[backstory]'
          value: description.backstory
        }
      ]
      R.div {class: 'form-group col-md-12'}, [
        R.label {class: 'control-label', for: 'notes'}, "Notes"
        R.textarea {
          class: 'form-control'
          id: 'notes'
          rows: 3
          name: 'description[notes]'
          value: description.notes
        }
      ]
    ]
  ]
