export interface Service {
    id: number;
    title: string;
    body: string;
  }
  
  export const fetchServices = async (): Promise<Service[]> => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Service[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching services:", error);
      return [];
    }
  };