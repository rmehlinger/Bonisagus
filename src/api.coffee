listCharacters = -> $.ajax({url: "/characters", method: "GET"})
getCharacter = (guid) -> $.ajax {url: "/characters/#{guid}", method: "GET"}
removeCharacter = (guid) -> $.ajax {url: "/characters/#{guid}", method: "DELETE"}

createCharacter = (data) -> $.ajax {
  url: "/characters"
  method: "POST"
  data
  headers: {"Content-Type": "application/json"}
}

updateCharacter =  (data, guid) -> $.ajax {
  url: "/characters/#{guid}"
  method: "PUT"
  data: data
  headers: { "Content-Type": "application/json" }
}
