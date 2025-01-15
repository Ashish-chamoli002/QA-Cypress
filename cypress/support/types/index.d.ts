declare namespace OrangeHRM {
    interface Employee {
      // Define employee interface
    }
    
    interface APIResponse<T> {
      data: T;
      message: string;
      status: number;
    }
  }