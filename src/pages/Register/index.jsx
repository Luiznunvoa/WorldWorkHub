
export function Register() {
  const steps = ["Create Account", "etc", "etc",];
  
  return (
    <main className="flex flex-col items-center w-full p-6">
      <ul className="flex flex-row max-w-md justify-between mb-6">
        {steps.map((label, index) => (
          <li
            key={index}
            className="flex flex-row items-center text-sm font-semibold text-center relative text-green-600"
          >
          
            <div className="w-6 h-6 mx-auto rounded-full bg-background_secondary text-white flex items-center justify-center" >
              {index + 1}
            </div>
            {(index + 1) < steps.length &&
              <div className="w-10 h-4 rounded-lg bg-background_secondary m-5"> 
                
              </div>
            }
          </li>
        ))}                
      </ul>
    </main>
  );
}