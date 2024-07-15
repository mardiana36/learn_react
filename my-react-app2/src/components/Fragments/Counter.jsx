import React from "react";
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log("constructor")
    }
    // componentDidMount akan di eksekusi ketik kode telah dijalankan atau sudah terload sempurna untuk melihat bisa di inspeksi halamanya
    componentDidMount() {
        this.setState({ count: 1 })
        console.log("componentDidMount");
    }
    // componentDidUpdate akan di eksekusi ketika setState di update atau button di bawah ini(button +) telah di klik sehingga state.countnya di update dan ketika state.countnya sudah mencapi 10 maka akan di rubah/reset kembali menjadi 0.
    // componentDidUpdate hanya bisa bekerja jika ada condition di dalamnya seperti if else atau condition yang lainnya.
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        if (this.state.count === 10) {
            this.setState({ count: 0 });
        }
    }
    render() {
        return (
            <div className="flex items-center">
                <h1 className="mr-5">{ this.state.count }</h1>
                <button className="bg-black text-white p-3" onClick={() => { this.setState({ count: this.state.count + 1 }) }}>+</button>
                {console.log("render")}
        </div>
        );
    }
}
export default Counter;