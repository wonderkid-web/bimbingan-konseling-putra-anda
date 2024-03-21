'use client'

import xlsx from "json-as-xlsx"

function Page() {
  const downloadFile = () => {

    let data = [
      {
        sheet: "Adults",
        columns: [
          { label: "User", value: "user" }, // Top level data
          { label: "Age", value: "age", format: '# "years"' }, // Custom format
          { label: "Phone", value: (row) => row?.more?.phone ?? "" }, // Run functions
        ],
        content: [
          { user: "Andrea", age: 20, more: { phone: `
          1. Wahyu \n
          2. Iin \n
          3. Hana\n
          
          ` } },
          { user: "Luis", age: 21, more: { phone: "12345678" } },
        ],
      },
      {
        sheet: "Children",
        columns: [
          { label: "User", value: "user" }, // Top level data
          { label: "Age", value: "age", format: '# "years"' }, // Custom format
          { label: "Phone", value: (row) => row?.more?.phone ?? "" }, // Run functions
        ],
        content: [
          { user: "Manuel", age: 16, more: { phone: "99999999" } },
          { user: "Ana", age: 17, more: { phone: "87654321" } },
        ],
      },
    ]

    let settings = {
      fileName: "MySpreadsheet",
    }
    xlsx(data, settings)
  }

  return (
    <div id="app">
      <h1>Testing json-as-xlsx</h1>
      <button onClick={downloadFile}>Download</button>
      <h2>
        <span>Visit this project on: </span>
        <a href="https://github.com/LuisEnMarroquin/json-as-xlsx" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </h2>
    </div>
  )
}

export default Page