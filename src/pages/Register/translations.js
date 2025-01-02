export const translations = {
  en: {
    steps: [
      {
        title: "Create your account",
        inputs: [
          {
            required: "First Name is required",
            minLength: {
              message: "First name must have at least 2 characters",
            },
            pattern: {
              message: "First name can only contain letters",
            },
            placeHolder: "First Name",
          },
          {
            required: "Last Name is required",
            minLength: {
              message: "Last name must have at least 2 characters",
            },
            pattern: {
              message: "Last name can only contain letters",
            },
            placeHolder: "Last Name",
          },
          {
            required: "Email is required",
            pattern: {
              message: "Please enter a valid email address",
            },
            placeHolder: "Email",
          },
          {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "Password must be at least 8 characters long and contain both letters and numbers",
            },
            placeHolder: "Password",
          },
          {
            required: "Confirm your password",
            validate: "password",
            placeHolder: "Confirm Password",
          },
        ]
      },
      {
        title: "Addres Information",
        inputs: [
          {
            required: "Region is required",
            placeHolder: "Select your state",
          },
          {
            required: "Phone is required",
            minLength: {
              message: "Phone number must have at least 9 numbers",
            },
            pattern: {
              message: "Please enter a valid Phone number",
            },
            placeHolder: "Phone number",
          },
          {
            required: "Zip Code is required",
            pattern: {
              message: "Please enter a valid zip code",
            },
            placeHolder: "Zip Code",
          },
        ],
      },
      {
        title: "Professional Information",
        inputs: [
          {
            name: "Education",
            type: "select",
            required: "Your Education Level is required",
            placeHolder: "Select your Education",
            options: [
              {
                label: "No Education",
                value: "No Education"
              },
              {
                label: "Middle School",
                value: "Middle School"
              },
              {
                label: "High School",
                value: "High School"
              },
              {
                label: "Bachelor Degree",
                value: "Bachelor Degree"
              },
              {
                label: "PhD",
                value: "PhD"
              },
            ]
          },
          {
            required: "Your current occupation is required",
            placeHolder: "Select your Occupation",
            options: [
              {
                label: "Driver",
                value: "Driver"
              },
              {
                label: "Waiter/Waitress",
                value: "Waiter/Waitress"
              },
              {
                label: "Cashier",
                value: "Cashier"
              },
              {
                label: "Cleaner",
                value: "Cleaner"
              },
              {
                label: "Stock Clerk",
                value: "Stock Clerk"
              },
              {
                label: "Fast Food Attendant",
                value: "Fast Food Attendant"
              },
              {
                label: "Janitor",
                value: "Janitor"
              },
              {
                label: "Construction Worker",
                value: "Construction Worker"
              },
              {
                label: "Electrician",
                value: "Electrician"
              },
              {
                label: "Plumber",
                value: "Plumber"
              },
              {
                label: "Security Guard",
                value: "Security Guard"
              },
              {
                label: "Cook",
                value: "Cook"
              },
              {
                label: "Car Washer",
                value: "Car Washer"
              },
              {
                label: "Intern",
                value: "Intern"
              },
              {
                label: "Production Operator",
                value: "Production Operator"
              },
              {
                label: "Bartender",
                value: "Bartender"
              },
            ]
          },
          {
            required: "ID is required",
            minLength: {
              message: "Last name must have at least 5 characters",
            },
            pattern: {
              message: "Please enter a valid ID",
            },
            placeHolder: "ID",
            value: "CPF"
          },
        ],
      },  
    ]
  },
  pt: {
    steps: [
      {
        title: "Crie sua conta",
        inputs: [
          {
            required: "Nome é obrigatório",
            minLength: {
              message: "O nome deve ter pelo menos 2 caracteres",
            },
            pattern: {
              message: "O nome só pode conter letras",
            },
            placeHolder: "Nome",
          },
          {
            required: "Sobrenome é obrigatório",
            minLength: {
              message: "O sobrenome deve ter pelo menos 2 caracteres",
            },
            pattern: {
              message: "O sobrenome só pode conter letras",
            },
            placeHolder: "Sobrenome",
          },
          {
            required: "Email é obrigatório",
            pattern: {
              message: "Por favor, insira um endereço de email válido",
            },
            placeHolder: "Email",
          },
          {
            required: "Senha é obrigatória",
            pattern: {
              message:
                "A senha deve ter pelo menos 8 caracteres e conter letras e números",
            },
            placeHolder: "Senha",
          },
          {
            required: "Confirme sua senha",
            validate: "senha",
            placeHolder: "Confirme a Senha",
          },
        ]
      },
      {
        title: "Informações de Endereço",
        inputs: [
          {
            required: "Região é obrigatória",
            placeHolder: "Selecione seu estado",
          },
          {
            required: "Telefone é obrigatório",
            minLength: {
              message: "O número de telefone deve ter pelo menos 9 números",
            },
            pattern: {
              message: "Por favor, insira um número de telefone válido",
            },
            placeHolder: "Número de telefone",
          },
          {
            required: "CEP é obrigatório",
            pattern: {
              message: "Por favor, insira um CEP válido",
            },
            placeHolder: "CEP",
          },
        ],
      },
      {
        title: "Informações Profissionais",
        inputs: [
          {
            name: "Educação",
            type: "select",
            required: "Seu nível de educação é obrigatório",
            placeHolder: "Selecione sua Educação",
            options: [
              {
                label: "Sem Educação",
                value: "Sem Educação"
              },
              {
                label: "Ensino Fundamental",
                value: "Ensino Fundamental"
              },
              {
                label: "Ensino Médio",
                value: "Ensino Médio"
              },
              {
                label: "Graduação",
                value: "Graduação"
              },
              {
                label: "Doutorado",
                value: "Doutorado"
              },
            ]
          },
          {
            required: "Sua ocupação atual é obrigatória",
            placeHolder: "Selecione sua Ocupação",
            options: [
              {
                label: "Motorista",
                value: "Driver"
              },
              {
                label: "Garçom/Garçonete",
                value: "Waiter/Waitress"
              },
              {
                label: "Caixa",
                value: "Cashier"
              },
              {
                label: "Faxineiro",
                value: "Cleaner"
              },
              {
                label: "Repositor",
                value: "Stock Clerk"
              },
              {
                label: "Atendente de Fast Food",
                value: "Fast Food Attendant"
              },
              {
                label: "Zelador",
                value: "Janitor"
              },
              {
                label: "Trabalhador da Construção",
                value: "Construction Worker"
              },
              {
                label: "Eletricista",
                value: "Electrician"
              },
              {
                label: "Encanador",
                value: "Plumber"
              },
              {
                label: "Segurança",
                value: "Security Guard"
              },
              {
                label: "Cozinheiro",
                value: "Cook"
              },
              {
                label: "Lavador de Carros",
                value: "Car Washer"
              },
              {
                label: "Estagiário",
                value: "Intern"
              },
              {
                label: "Operador de Produção",
                value: "Production Operator"
              },
              {
                label: "Barman",
                value: "Bartender"
              },
              {
                label: "Costureira",
                value: "Seamstress"
              },
              {
                label: "Padeiro",
                value: "Baker"
              },
              {
                label: "Vendedor Interno",
                value: "Inside Salesperson"
              },
              {
                label: "Cabeleireiro",
                value: "Hairdresser"
              },
              {
                label: "Trabalhador",
                value: "Laborer"
              },
              {
                label: "Assistente Administrativo",
                value: "Administrative Assistant"
              },
              {
                label: "Recepcionista",
                value: "Receptionist"
              },
              {
                label: "Entregador",
                value: "Delivery Driver"
              },
              {
                label: "Jardineiro",
                value: "Gardener"
              },
              {
                label: "Motorista de Aplicativo",
                value: "Ride-share Driver"
              },
              {
                label: "Operador de Empilhadeira",
                value: "Forklift Operator"
              },
              {
                label: "Assistente de Escritório",
                value: "Office Assistant"
              },
              {
                label: "Açougueiro",
                value: "Butcher"
              },
              {
                label: "Mecânico",
                value: "Mechanic"
              },
              {
                label: "Limpador de Janelas",
                value: "Window Cleaner"
              },
              {
                label: "Pintor",
                value: "Painter"
              },
              {
                label: "Alfaiate",
                value: "Tailor"
              },
              {
                label: "Entregador",
                value: "Delivery Boy"
              },
              {
                label: "Montador de Móveis",
                value: "Furniture Assembler"
              },
              {
                label: "Assistente de Cozinha",
                value: "Kitchen Assistant"
              },
              {
                label: "Carpinteiro",
                value: "Carpenter"
              },
              {
                label: "Agricultor",
                value: "Farmer"
              }
            ]
          },
          {
            required: "ID é obrigatório",
            minLength: {
              message: "O ID deve ter pelo menos 5 caracteres",
            },
            pattern: {
              message: "Por favor, insira um ID válido",
            },
            placeHolder: "ID",
            value: "CPF"
          },
        ],
      },  
    ]
  }
}
