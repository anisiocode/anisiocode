// utils/loadTasks.ts
export async function loadTasks() {
  const tasks = [
    async () => {
      // Simula preload de imagem
      await new Promise((res) => setTimeout(res, 20));
    },
    async () => {
      // Simula preload de imagem
      await new Promise((res) => setTimeout(res, 200));
    },
    async () => {
      // Simula chamada de API
      await new Promise((res) => setTimeout(res, 100));
    },
    async () => {
      // Simula carregamento de fonte
      await new Promise((res) => setTimeout(res, 400));
    },
    async () => {
      // Simula carregamento de fonte
      await new Promise((res) => setTimeout(res, 100));
    },
  ];

  return tasks;
}
