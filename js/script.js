class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }

    adicionarProduto(produto) {
        produto.precoProduto = parseFloat(produto.precoProduto);
        this.arrayProdutos.push(produto);
        this.id++;
    }

    salvarProduto() {

        let produto = this.lerDados();
        //console.log(produto);

        if (this.validarCampos(produto)) {
            //adicionado dps do editar
            if (this.editId == null) {
                this.adicionarProduto(produto);
            }else{
                this.editarProduto(this.editId, produto);
            }
        }

        this.listarTabela();
        this.limparForm();

    }

    listarTabela() {
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
            imgEdit.setAttribute("onclick", "produto.prepararEdicaoProduto(" + JSON.stringify(this.arrayProdutos[i]) + ")")

            td_acoes.appendChild(imgEdit);

            let imgDelete = document.createElement('img');
            imgDelete.src = 'imgs/delete.svg';
            imgDelete.setAttribute("onclick", "produto.deletarProduto(" + this.arrayProdutos[i].idProduto + ", '" + this.arrayProdutos[i].nomeProduto + "')")

            td_acoes.appendChild(imgDelete);
            td_acoes.classList.add('center');
        }
    }

    lerDados() {
        let produto = {};

        produto.idProduto = this.id;
        produto.nomeProduto = document.getElementById('txtProduto').value;
        produto.precoProduto = document.getElementById('txtPreco').value;

        return produto;
    }


    validarCampos(produto) {
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

    limparForm() {
        document.getElementById('txtProduto').value = '';
        document.getElementById('txtPreco').value = '';
        document.getElementById('txtProduto').focus();
        document.getElementById('btnSalvarAtualizar').innerText = "Salvar";
        this.editId = null;
    }

    deletarProduto(idProduto, nomeProtudo) {
        if (confirm("Deseja mesmo remover o produto:\n" + idProduto + " - " + nomeProtudo + "\n???")) {
            let tbody = document.getElementById('tbody');
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].idProduto == idProduto) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
    }

    prepararEdicaoProduto(dadosProduto) {
        //console.log(dadosProduto);
        this.editId = dadosProduto.idProduto;
        document.getElementById('txtProduto').value = dadosProduto.nomeProduto;
        document.getElementById('txtPreco').value = dadosProduto.precoProduto;
        document.getElementById('btnSalvarAtualizar').innerText = "Atualizar";
    }

    editarProduto(idProduto, produto){
        //alert(idProduto);
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].idProduto == idProduto) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].precoProduto = produto.precoProduto;
            }
            
        }
    }
}

var produto = new Produto();