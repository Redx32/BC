const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://bot-system33.glitch.me/`);
}, 280000);

const Discord = require('discord.js');  
const client = new Discord.Client();  
const moment = require('moment');
const zalgo = require('zalgolize');  
const math = require('math-expression-evaluator');   
const figlet = require('figlet');   
const fs = require('fs');  
const ms = require('ms');  
client.login('NzIwOTE5ODM5NDI1ODIyNzUw.XuNG1g.4eH7dIqkhDrnEeYRBrjHJp_nRgg');
const prefix = '-'

client.on('ready', () => {
  console.log(`Start : ${client.user.tag}!`);
client.user.setGame(`𝑷𝑯𝑶𝑬𝑵𝑰𝑿 𝑺𝑻𝑶𝑹𝑬 𝑩𝑶𝑻`,"")
client.user.setStatus("o")
});


client.on("message", message => { 
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "تــم مسح الشات",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });
 
 client.on('message', message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'Pbc')) {
          if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("?|**`ADMINISTRATOR`ليس لديك صلاحيات`**  ");
     let filter = m => m.author.id === message.author.id;
 
 let recembed = new Discord.RichEmbed()
 .setTitle(`${client.user.username}`)
 .setDescription(`
 -=-=-=-=-=-=-=-=-=-=
 🎖 بروداكاست لرتبه معينة بدون امبيد
 
 🏅 بروداكاست لرتبه معينة مع امبيد
  
 📧 بروداكاست للكل بدون امبيد   
  
 ❌ لالغاء البروداكاست
 -=-=-=-=-=-=-=-=-=-=
 `)
 
 message.channel.sendEmbed(recembed).then(msg => { 
     msg.react('🎖')
     .then(() => msg.react('🏅'))
     .then(() =>  msg.react('📧'))
     .then(() => msg.react('❌'))

 
             let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
 
             let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
 
             let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
             let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
 
             let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8

             let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8

             let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
 
             let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });
 
             let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
     
             let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
 
             let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });

             let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                 
             let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });

             let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
 
 embedonlineonly.on('collect', r => {

    let msge;
    message.channel.send(':pencil: **| اكتب محتوى الرسالة :pencil2: **').then(msg => {
    
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
           .then(collected => {
               collected.first().delete();
               msge = collected.first().content;
               msg.edit('✅ **| هل تريد ان تمنشن الشخاص ? [اي/لا] **').then(msg => {
                 message.channel.awaitMessages(filter, {
                   max: 1,
                   time: 90000,
                   errors: ['time']
                 })
                 .then(collected => {
                   if(collected.first().content === 'اي') {
   message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
   
   
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(` Broadcast`)
           .addField('🔰***السيرفر***🔰', message.guild.name)
           .addField('🚩***المرسل***🚩', message.author.username)
           .addField('📜***الرسالة***📜', `${msge}`)
           .setThumbnail('https://cdn.discordapp.com/attachments/687581456402612224/692359324449898506/megaphone.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           m.send(`${m}`)
           
       })
   }})
   if(collected.first().content === 'لا') {
   message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(` Broadcast`)
           .addField('🔰***السيرفر***🔰', message.guild.name)
           .addField('🚩***المرسل***🚩', message.author.username)
           .addField('📜***الرسالة***📜', `${msge}`)
           .setThumbnail('https://cdn.discordapp.com/attachments/687581456402612224/692359324449898506/megaphone.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           
       })
   }
                 
   })
               })
           })
       })
 
       
 onlineonly.on('collect', r => {
    let msge;
    message.channel.send(':pencil: **| اكتب محتوى الرسالة :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            msge = collected.first().content;
            msg.edit('✅ **| هل تريد ان تمنشن الشخاص ? [اي/لا] **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {

                if(collected.first().content === 'اي') {
message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
                

message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`) 
m.send(`${m}`)       
        
    })
}
if(collected.first().content === 'لا') {
message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`) 
                
    })}
})
})
        })
    })
})

 embedmsg.on('collect', r => {
     let msge;
  message.channel.send(':pencil: **| اكتب محتوى الرسالة :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit('✅ **| هل تريد ان تمنشن الشخاص ? [اي/لا] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
                 if(collected.first().content === 'اي') {
 message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
 
 
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(` Broadcast`)
         .addField('🔰***السيرفر***🔰', message.guild.name)
         .addField('🚩***المرسل***🚩', message.author.username)
         .addField('📜***الرسالة***📜', `${msge}`)
         .setThumbnail('https://cdn.discordapp.com/attachments/687581456402612224/692359324449898506/megaphone.pnghttps://cdn.discordapp.com/attachments/687581456402612224/692359324449898506/megaphone.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         m.send(`${m}`)
         
     })
 }})
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(` Broadcast`)
         .addField('🔰***السيرفر***🔰', message.guild.name)
         .addField('🚩***المرسل***🚩', message.author.username)
         .addField('📜***الرسالة***📜', `${msge}`)
         .setThumbnail('https://cdn.discordapp.com/attachments/687581456402612224/692359324449898506/megaphone.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
     })
 }
               
 })
             })
         })
     })
 
 
    
 
 
 
 normalmsg.on('collect', r => {
     let msge;
     message.channel.send(':pencil: **| اكتب محتوى الرسالة :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit('✅ **| هل تريد ان تمنشن الشخاص ? [اي/لا] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'اي') {
 message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
                 
 
     message.guild.members.forEach(m => {
 m.send(`${msge}`) 
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
     message.guild.members.forEach(m => {
         m.send(`${msge}`) 
                 
     })}
 })
 })
         })
     })
 })
 
 onlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| اكتب محتوى الرسالة :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit('✅ **| اكتب اسم الرتبة بدون منشن**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit('✅ **| هل تريد ان تمنشن الشخاص ? [اي/لا] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'اي') {
 message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
                 
 
             message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
 m.send(`${msge}`) 
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
         m.send(`${msge}`) 
                 
     })}
 })
 })
         })
     })
 })
 })
 });
 
 
 
 embedonlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| اكتب محتوى الرسالة :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit('✅ **| اكتب اسم الرتبة بدون منشن**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit('✅ **| هل تريد ان تمنشن الشخاص ? [اي/لا] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'اي') {
 message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
                 
 
                     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(` Broadcast`)
         .addField('🔰***السيرفر***🔰', message.guild.name)
         .addField('🚩***المرسل***🚩', message.author.username)
         .addField('📜***الرسالة***📜', `${msge}`)
         .setThumbnail('https://cdn.discordapp.com/attachments/687581456402612224/692359324449898506/megaphone.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: تم ارسال البرود كاست بنجاح :loudspeaker:**`);
 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(` Broadcast`)
         .addField('🔰***السيرفر***🔰', message.guild.name)
         .addField('🚩***المرسل***🚩', message.author.username)
         .addField('📜***الرسالة***📜', `${msge}`)
         .setThumbnail('https://cdn.discordapp.com/attachments/687581456402612224/692359324449898506/megaphone.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
                 
     })}
 })
 })
         })
     })
 })
 })
 })
     cancel.on('collect', r => {
         let cancelembed = new Discord.RichEmbed()
         .setTitle('Successfully Canceled :x:')
      message.channel.sendEmbed(cancelembed)
         embedmsg.stop();
         normalmsg.stop();
         onlyrole.stop();
         embedonlyrole.stop();
         embedonlineonly.stop()
         onlineonly.stop()
         cancel.stop();
     })
 })
    }});

client.login(process.env.BOT_TOKEN);
