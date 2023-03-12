# CSV to JSON Converter using Node Streams and HTTP Module

This is a simple CSV to JSON converter that uses Node Streams and the native HTTP module to create a server that can handle CSV files sent via POST request and respond with the corresponding JSON representation. This implementation does not rely on external libraries 

### How to use

1. Clone this repository:

```
  git clone https://github.com/fabriciolak/csv-to-json-converter.git
```

2. Navigate to the repository folder

```
  cd csv-to-json-converter
```

3. Start the server.

```
npm run dev
```

5. Send a POST request to the server with a CSV file attached.

```
curl -X POST -H "Content-Type: text/csv" --data-binary "@path/to/file.csv" http://localhost:3000/
```

### License

This project is licensed under the MIT License. See the LICENSE file for details.
