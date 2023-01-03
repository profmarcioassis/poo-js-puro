class Produto{
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvarProduto(){

        let produto = this.lerDados();
        //console.log(produto);

        if (this.validarCampos(produto)) {
            this.adicionarProduto(produto);  
        }

        this.listarTabela();
        this.limparForm();
        
    }

    listarTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for (let i = 0; i < this.arrayProdutos.length; i++) {
           let tr = tbody.insertRow();
           let td_id = tr.insertCell();
           let td_produto = tr.insertCell();
           let td_preco = tr.insertCell();
           let td_acoes = tr.insertCell();

           td_id.innerText = this.arrayProdutos[i].idProduto;
           td_produto.innerText = this.arrayProdutos[i].nomeProduto;
           td_preco.innerText = this.arrayProdutos[i].precoProduto;

           td_id.classList.add('center');
           
           let imgEdit = document.createElement('img');
           imgEdit.src = 'imgs/edit.svg';

           td_acoes.appendChild(imgEdit);

           let imgDelete = document.createElement('img');
           imgDelete.src = 'imgs/delete.svg';
           td_acoes.appendChild(imgDelete);
           td_acoes.classList.add('center');
        }
    }

    adicionarProduto(produto){
        this.arrayProdutos.push(produto);
        this.id++;

    }

    lerDados(){
        let produto = {};

        produto.idProduto = this.id;
        produto.nomeProduto = document.getElementById('txtProduto').value;
        produto.precoProduto = document.getElementById('txtPreco').value;

        return produto;
    }

    validarCampos(produto){
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Informe o nome do produto.\n';
        }
        if (produto.precoProduto == '') {
            msg += 'Informe o preço do produto.\n';
        }

        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }

    limparForm(){
        document.getElementById('txtProduto').value = '';
        document.getElementById('txtPreco').value = '';
        document.getElementById('txtProduto').focus();
    }
}

var produto = new Produto();