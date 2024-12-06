# Place and Region Lookup API Documentation

## API Information
This project uses the Zippopotam.us API to look up location information based on postal codes.

### API Base URL
```
http://api.zippopotam.us
```

### API Endpoint Format
```
http://api.zippopotam.us/{country_code}/{postal_code}
```

### Example API Calls
1. United States (US):
   ```
   http://api.zippopotam.us/US/90210
   ```

2. United Kingdom (GB):
   ```
   http://api.zippopotam.us/GB/SW1A1AA
   ```

3. Canada (CA):
   ```
   http://api.zippopotam.us/CA/M5V2T6
   ```

### Sample Response
```json
{
  "post code": "90210",
  "country": "United States",
  "country abbreviation": "US",
  "places": [
    {
      "place name": "Beverly Hills",
      "longitude": "-118.4065",
      "state": "California",
      "state abbreviation": "CA",
      "latitude": "34.0901"
    }
  ]
}
```

### Available Country Codes
- US (United States)
- GB (United Kingdom)
- FR (France)
- DE (Germany)
- IT (Italy)
- ES (Spain)
- CA (Canada)
- JP (Japan)
- AU (Australia)
- IN (India)
- BR (Brazil)
- NL (Netherlands)
- PL (Poland)
- CZ (Czech Republic)
- BE (Belgium)

### API Features
- Free to use
- No API key required
- Returns JSON format
- Supports multiple countries
- CORS enabled

### Error Handling
- Returns 404 if postal code not found
- Returns JSON response for valid requests
- No rate limiting specified

### Usage Notes
1. The API supports both HTTP and HTTPS
2. Some postal codes may need to be formatted (removing spaces)
3. Response format is consistent across all countries
4. All responses include:
   - Country information
   - Place details
   - Geographic coordinates
   - State/region information
