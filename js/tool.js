// 問い合わせフォーム送信時のメッセージ表示
function showMessage() {
    let name = document.getElementById('js-name');
    let email = document.getElementById('js-email');
    let toiawase = document.getElementById('js-toiawase');
    if ((name.value !== '') && (email.value !== '') && (toiawase.value !== '')) {
        let toiawaseContent = document.getElementById('js-toiawaseContent');
        let toiawaseMsg = document.getElementById('js-toiawaseMsg');
        let toiawaseAlert = document.getElementById('js-toiawaseAlert');
        document.toiawaseform.reset();
        toiawaseMsg.style.display = 'block';
        toiawaseContent.style.display = 'none';
        toiawaseAlert.style.display = 'none';
    }
};
