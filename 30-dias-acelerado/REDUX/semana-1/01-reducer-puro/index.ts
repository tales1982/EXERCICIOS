import store from "./store";
import { addCart, remove } from "./cartSlice";

console.log("\n🛒 === INICIANDO APLICAÇÃO DE CARRINHO DE COMPRAS ===\n");
console.log("📦 Estado completo da store:", store.getState());

const Item1 = {
    id: 1,
    name: "Mause"
}

const Item2 = {
    id: 2,
    name: "Teclado"
}

const Item3 = {
    id: 3,
    name: "Ecran"
}

const Item4 = {
    id: 4,
    name: "Table"
}

const getCarrinho = () => store.getState().carrinho.lista;
const logCarrinho = (acao: string, item?: any) => {
    const carrinho = getCarrinho();
    console.log(`\n${acao}`);
    console.log(`📊 Total de itens: ${carrinho.length}`);
    if (item) {
        console.log(`🔖 Item: ${item.name} (ID: ${item.id})`);
    }
    console.log("�� Carrinho atual:", carrinho);
};

console.log("\n" + "=".repeat(50));
logCarrinho("✅ Estado inicial do carrinho");

console.log("\n" + "=".repeat(50));
store.dispatch(addCart(Item1));
logCarrinho("➕ Adicionado item ao carrinho", Item1);

console.log("\n" + "=".repeat(50));
store.dispatch(addCart(Item2));
logCarrinho("➕ Adicionado item ao carrinho", Item2);

console.log("\n" + "=".repeat(50));
store.dispatch(addCart(Item3));
logCarrinho("➕ Adicionado item ao carrinho", Item3);

console.log("\n" + "=".repeat(50));
store.dispatch(addCart(Item4));
logCarrinho("➕ Adicionado item ao carrinho", Item4);

console.log("\n" + "=".repeat(50));
store.dispatch(remove({ id: 1 }));
logCarrinho("➖ Removido item do carrinho", Item1);

console.log("\n" + "=".repeat(50));
console.log("\n✨ === PROCESSO FINALIZADO ===\n");

