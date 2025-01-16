# QR Code Maker

## Description  
The QR Code Maker is a simple web application that allows users to generate QR codes for URLs. Users can input a URL and provide a file name to save the QR code image, which is then displayed for scanning or download.

---

## Why Use This Tool?  
1. **Ease of Use**: Minimalistic interface for quick QR code generation.  
2. **Customizable**: Allows users to name their QR code files for easy identification.  
3. **Responsive**: Works across different devices for seamless access.  

---

## Features  
- **Generate QR Codes**: Input a URL, and the app generates a QR code image instantly.  
- **File Naming**: Save the QR code with a custom file name.  
- **Interactive UI**: Displays the generated QR code alongside the inputted URL.  

---

## Drawbacks  
- **No Error Handling for Invalid URLs**: Currently, no validation for non-URL inputs.  
- **Limited Styling**: The app has a basic design and may need further styling for production use.  
- **Storage**: Saved QR code images are stored in the `public` folder and can accumulate over time.  

---

## Architecture  

### 1. **Frontend**:  
The frontend is built using EJS templates for rendering the user interface dynamically.  

#### File: `index.ejs`  
Key components:  
- Input fields for URL and file name.  
- Form submission to the `/create` endpoint.  
- Conditional rendering of QR code and input fields.  

```html
<h1>QR CODE MAKER</h1>
<% if (locals.name && locals.url) { %>
  <h2>Your file name is: <%= name %></h2>
  <img src="/<%= img %>" alt="qrcode" width="600" height="600">
  <h2><a href="<%= url %>"><%= url %></a></h2>
<% } else { %>
  <h2>Type in your URL:</h2>
<% } %>
```

### 2. **Backend**:  
The backend is built using Express.js, which handles routing and QR code generation.  

#### File: `index.js`  
Key components:  
- **GET `/`**: Renders the main interface.  
- **POST `/create`**: Accepts user input, generates a QR code image, and saves it in the `public` folder.  

```javascript
app.post("/create", (req, res) => {
  let name = req.body.fname;
  let url = req.body.url;
  let imgLocation = req.body.fname + ".png";
  let qr_svg = qr.image(req.body.url);

  qr_svg.pipe(fs.createWriteStream("public/" + imgLocation));
   
  res.render("index.ejs", {
    url: url,
    name: name,
    img: imgLocation
  });
});
```

### 3. **Dependencies**:  
- `express`: For server-side routing and rendering.  
- `body-parser`: To parse incoming form data.  
- `qr-image`: To generate QR code images.  
- `fs`: For saving QR code files to the filesystem.  

---

## How to Install  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/qr-code-maker.git
   cd qr-code-maker
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Run the server:  
   ```bash
   node index.js
   ```

4. Open your browser and navigate to:  
   ```
   http://localhost:3000
   ```

---

## How to Use  

1. Access the application in your browser.  
2. Input a **URL** and a **file name** in the form fields.  
3. Click the **CREATE** button.  
4. The generated QR code will be displayed along with the provided URL.  

---

## Stability  
This project is in its early stages and open to contributions.  

---

## Contributing  

1. Fork the repository.  
2. Create a feature branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m 'feat: Add new feature'
   ```
4. Push to your branch:  
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.  

---

## Authors  
**Nicholas Kume**  
[GitHub Profile](https://github.com/NicholasBkume)  

---

## License  
This project is licensed under the MIT License.
