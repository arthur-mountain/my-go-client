declare namespace Common {
  type Pagination = {
    currentPage: number;
    perPage: number;
    totalPage: number;
    totalCount?: number;
  }

  type ErrorType = {
    message: string;
  }
}