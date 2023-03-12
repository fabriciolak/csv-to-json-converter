export async function getCsvStream(req, res) {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = Buffer.concat(buffers).toString()
  } catch (error) {
    req.body = null
  }

}
