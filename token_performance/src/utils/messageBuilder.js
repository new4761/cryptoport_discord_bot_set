class MessageBuilder {
  msg;
  constructor() {
    this.msg = "";
  }

  reset() {
    this.msg = "";
  }
  set_symbol(symbol) {
    this.msg = ` symbol : ${symbol} `;
  }

  set_chain(chain) {
    this.msg = ` chain : ${chain} `;
  }

  set_type(type) {
    this.msg = ` type : ${type} `;
  }

  add_newline() {
    this.msg = "\n";
  }

  set_user_name(message) {
    this.msg += ` from ${message.author.username} `;
  }
}

module.exports = MessageBuilder;
