import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="Click Me" styles="bg-blue-500 hover:bg-blue-700 rounded-sm rounded-lg rounded-full"/>
      <Button title="Secondary Button" styles="bg-gray-500 hover:bg-gray-700 rounded-sm rounded-lg rounded-full" />
  
      </div>
      
    )
  }
  export default Landing