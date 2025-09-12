[![Node CI](https://github.com/lizc-au/my-first-project/actions/workflows/ci.yml/badge.svg)](https://github.com/lizc-au/my-first-project/actions/workflows/ci.yml)

# my-first-project

Mucking about


## Troubleshooting
- If Chrome crashes opening http://localhost:3000, try http://127.0.0.1:3000 or another browser (Edge/Firefox), or disable Use hardware acceleration in Chrome Settings > System.
- Verify without a browser:
 - PowerShell: Invoke-RestMethod http://localhost:3000/api/health
 - POST echo: Invoke-RestMethod -Method POST -Uri http://localhost:3000/api/echo -Body (@{msg='hi'}|ConvertTo-Json) -ContentType 'application/json'
