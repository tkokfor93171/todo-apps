import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Input } from "./components/ui/input";
import { useState } from 'react';
import { MdDelete } from "react-icons/md";

export default function Home() {
  const [todos, setTodos] = useState<string[]>(["Reactを学ぶ","Typescriptを学ぶ","Viteを学ぶ"]);
  const [todo, setTodo] = useState("");
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[400px] max-w-md p-4">
        <Card>
          <CardHeader>
            <CardTitle>Todo App</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="内容" onChange={(e) => setTodo(e.target.value)} value={todo}/>
            {todo}
            <Button className="w-full" onClick={()=>{setTodos([...todos, todo]); setTodo("");}}>追加</Button>
            <ul className="mt-4">
              {todos.map((todo) => (
                <div className = "flex">
                <li key={todo}>・{todo}</li>
                <button className="ml-auto">
                  <MdDelete onClick={()=>setTodos(todos.filter((t)=>t !== todo))}/>
                </button>
                </div>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

