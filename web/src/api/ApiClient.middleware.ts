class ApiClient {
    private baseUrl: string
    
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl
    }
    
    async get<T>(endpoint: string, urlParams: string | null): Promise<T> {
      console.log(`${this.baseUrl}/${endpoint}${urlParams ? `?${urlParams}` : ''}`)
      try {
        const response = await fetch(`${this.baseUrl}/${endpoint}${urlParams ? `?${urlParams}` : ''}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const result = await response.json()
        
        return result
      } catch (error) {
        console.error('Error during GET request:', error)
        throw error
      }
    }
}

export default ApiClient
