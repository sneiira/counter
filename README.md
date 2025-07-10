# 🧮 Counter
> A lightweight, persistent counter CLI tool to increment/decrement and display a numeric value.

---

## 📚 Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Installation](#installation)  
4. [Usage](#usage)  
5. [Commands](#commands)  
6. [Configuration](#configuration)  
7. [Examples](#examples)  
8. [Development](#development)  
9. [Contributing](#contributing)  
10. [License](#license)  

---

## 📝 Overview

**Counter** is a simple and portable command-line utility for managing a count value. It supports persisting the count in a file, flexible configuration, and works on Linux, macOS, and Windows.

---

## ✨ Features

- Increment or decrement a counter by a specified amount  
- Display the current count  
- Reset to zero  
- Persistent storage using a local file (`.db`, `.json`, or custom format)  
- Customizable file location via CLI flag or environment variable  

---

## 🛠️ Installation

### From source

```bash
git clone https://github.com/sneiira/counter.git
cd counter
# Example build command (replace with your own)
make build
