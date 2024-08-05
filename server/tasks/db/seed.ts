// IMPORTANT: importing tables statically might cause memory issues due to nitro bundling the
// whole database data into the bundle when running `npm run dev`. However, we have not been
// able to find a workaround using e.g. dynamic imports or fs.readdirSync() to load the tables
// so in the meantime, while we wait for an answer/solutino in Discord, we simply comment/uncomment
// see https://discord.com/channels/473401852243869706/1269627096188325958/1269627096188325958

// 1) ✅ statically analyzable imports
import { todos as todos1 } from "../../../data";


export default defineTask({
  meta: {
    name: "db:seed",
    description: "Run database seed task",
  },
  async run() {
    try {
      // 2) ✅ statically analyzable dynami imports
      const { todos: todos2 } = await import("../../../data");
      // 3) ❌ dynamic imports
      const filepath = "data";
      const { todos: todos3 } = await import(`../../../${filepath}`);

      console.log({ todos1: todos1.length, todos2: todos2.length, todos3: todos3.length });

       await useDB().insert(tables.todos).values(todos1 as any).execute();

      return { result: "success" };
    } catch (error: any) {
      return { result: "error", error: `[users] ${error.message}` };
    }
  },
});
