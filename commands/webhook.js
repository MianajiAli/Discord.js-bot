module.exports = {
  name: "webhook",
  description: "Makes a webhook to impersonate someone",
  args: true,
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_WEBHOOKS")) {
      return message.channel.send(
        "<a:alert:995652726543355975> **You can not use this command | Permission: MANAGE_WEBHOOKS**"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_WEBHOOKS"))
      return message.channel.send(
        "<a:alert:995652726543355975> **I do not have the correct permissions | Permission : MANAGE_WEBHOOKS**"
      );

    message.delete();

    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!args[1]) {
      return message.channel.send(
        "<a:alert:995652726543355975> **Please enter your message**"
      );
    }
    if (!user)
      return message.channel.send(
        "<a:alert:995652726543355975> **Please mention a user**"
      );
    const webhook = await message.channel.createWebhook(user.displayName, {
      avatar: user.user.displayAvatarURL(),
      channel: message.channel.id,
    });
    await webhook.send(args.slice(1).join(" ")).then(() => {
      webhook.delete();
    });
  },
};
