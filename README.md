# jwt_example

# **run server**
```bash
npm run dev
```
# **port**
- listening port 3000
# **endpoint**
- **/generate**
    - endpoint to generate token for communication start between client and server
- **/verify/:token**
    - endpoint to verify token with private key and so verify the integrity the information inside token
    - setting as parameter the token in url of the page