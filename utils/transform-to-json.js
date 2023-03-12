export function transformToJson(data) {
  const lines = data.split('\n')
  const headers = lines[0].split(',')

  const content = []

  for(let i = 0; i < lines.length; i++) {
    const values = lines[i].split(',')
    const obj = {}

    for(let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j]
    }

    content.push(obj)
  }

  return JSON.stringify(content)
}
