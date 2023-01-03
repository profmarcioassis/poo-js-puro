<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinho de compras</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js"></script>
</head>

<body>
    <header>
        <h1>Minha Loja Virtual</h1>

    </header>
    <main>
        <div class="title">
            <h2>Produtos</h2>
            <span>Lista de produtos da loja.</span>
        </div>
        <div class="card">
            <div class="lineInput">
                <label for="txtProduto">Produto</label>
                <input type="text" name="txtProduto" id="txtProduto" placeholder="Nome do produto" autofocus>
            </div>
            <div class="lineInput">
                <label for="txtValor">Preço</label>
                <input type="text" name="txtPreco" id="txtPreco" placeholder="Preço do produto">
            </div>
            <button onclick="produto.salvarProduto()">Salvar</button>
            <button onclick="produto.limparForm()">Cancelar</button>
        </div>
        <div class="content">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                   
                </tbody>
            </table>

        </div>

    </main>

    <footer>

    </footer>

</body>

</html>