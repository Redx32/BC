const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#";



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
      console.log(`Brodcast Bot`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Brodcast Bot ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$bc |DF_Team`,"http://twitch.tv/Death Shop")
client.user.setStatus("o")
});



client.on('message', message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'AG')) {
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


client.login('token');
