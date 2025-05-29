export interface PillProps {
    title: string
  }
  export const styles: string = `
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .h-screen {
    height: 100vh;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  .font-semibold {
    font-weight: 600;
  }
  .border {
    border-width: 1px;
  }
  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  .mt-3 {
    margin-top: 0.75rem;
  }
  .bg-blue-500 {
    background-color: #3b82f6;
  }
  .text-white {
    color: #ffffff;
  }
  .rounded-full {
    border-radius: 9999px;
  }
`;