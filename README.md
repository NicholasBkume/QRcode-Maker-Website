# QR Code Maker

## 📜 Description  
The **QR Code Maker** is a simple web application that generates QR codes for URLs. Users can input a URL and provide a file name to save the QR code image, which is then displayed for scanning or download.

---

## ❓ Why Use This Tool?  
- **Ease of Use**: Minimalistic interface for quick QR code generation.  
- **Customizable**: Allows users to name their QR code files for easy identification.  
- **Responsive**: Works seamlessly across devices for convenient access.  

---

## ⚙️ Features  
- **Generate QR Codes**: Input a URL, and the app instantly generates a QR code image.  
- **File Naming**: Save QR code images with a custom file name.  
- **Interactive UI**: Displays the generated QR code alongside the inputted URL.  

---

## 🛠️ Drawbacks  
- **No Error Handling**: Currently, no validation for invalid URLs.  
- **Basic Styling**: The design is functional but minimalistic.  
- **Storage Management**: QR code images are saved in the `public` folder and may require manual cleanup.  

---

## 🏗️ Architecture  

### 1. **Frontend**  
The frontend uses **EJS** templates to dynamically render the user interface.  

#### Key File: `index.ejs`  
Core components include:  
- Input fields for URL and file name.  
- A form that submits data to the `/create` route.  
- Conditional rendering to show the QR code image upon successful generation.  

```html
<h1>QR CODE MAKER</h1>
<% if (locals.name && locals.url) { %>
  <h2>Your file name is: <%= name %></h2>
  <img src="/<%= img %>" alt="qrcode" width="600" height="600">
  <h2><a href="<%= url %>"><%= url %></a></h2>
<% } else { %>
  <h2>Type in your URL:</h2>
<% } %>
