/* <head>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
</head> */

<script type="text/babel">
    class ModalHeader extends React.Component {
        render(){
            return (
                <div class="modal-header text-center">
                    <h5 class="modal-title w-100" id="label1">カードデータの修正</h5>
                    <a type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </a>
                </div>
            );
        }
    }
    class ModalBody extends React.Component {
        cardData   = null;
        labelStyle = {};
        constructor (props) {
            super(props);
            this.cardData = props.cardData;
            this.labelStyle = {
                marginbottom: "0.1rem",
            };
            console.log(this.labelStyle);
        }
        render(){
            return (
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="formControlInput1" >タイトル</label>
                            <input type="text" class="form-control" id="formControlInput1" placeholder={this.cardData.title} />
                        </div>
                        <div class="form-group">
                            <label for="formControlInput2" >画像URL</label>
                            <input type="url" class="form-control" id="formControlInput2" placeholder={this.cardData.title} />
                            <img class="img-thumbnail" src="https://www.pakutaso.com/shared/img/thumb/kumakichi2020A1946_TP_V.jpg" />
                        </div>
                        <div class="form-group">
                            <label for="formControlInput3" >期間</label>
                            <div class="form-inline">
                                開始 : <input type="date" class="form-control mr-2" id="formControlInput3" />
                                終了 : <input type="date" class="form-control" id="formControlInput4" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="formControlTextarea1" >説明文</label>
                            <textarea class="form-control" id="formControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                </div>
            );
        }
    }

    class CreateModal extends React.Component {
        cardIndex = "";
        cardData  = "";
        constructor(props) {
            super(props);
            this.cardData  = props.cardData;
            this.cardIndex = props.cardIndex;
        }
        render(){
            return (
                <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <ModalHeader />
                            <ModalBody cardData={this.cardData} />
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    let cardModel = [
        {title: "titleだよ", body: "ボディだよ"},
    ];
    let le = (
        <div class="container bg-light">
            <CreateModal cardData={cardModel[0]} cardIndex={0}/>
        </div>
    );
    let domModal  = document.querySelector('#root-modal');
    ReactDOM.render(le, domModal);

    // ここの位置をどうするか。
    $('#modal1').on('hide.bs.modal', function () {
        alert('モーダルを閉じていいですか？');
    });
</script>