class ApiClient {
    private baseUrl: string
    
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl
    }
    
    async get<T>(endpoint: string, urlParams: string | null): Promise<T> {
      try {
        const response = await fetch(`${this.baseUrl}/${endpoint}${urlParams ? `?${urlParams}` : ''}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        return await response.json()
      } catch (error) {
        console.error('Error during GET request:', error)
        throw error
      }
    }
}

export default ApiClient
