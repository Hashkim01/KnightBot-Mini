/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','256702484163'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2bKiSBT8l3rVaGVXIm7EIIqCK8qiTMxDCQWUslnFInb47xNc+/bth5meO2+1RZ48mXnqO8hyTNEStUD+DgqCa1iiblm2BQIymFRhiAjogwCWEMjgutXG6xnEpy31vXOTDmia8No9Ya9swx7wzeBne51p1Us2ewPPPiiqc4L93wCOte3CwFuD7LnMzhf7NWL4lpHC0fg23TKKZs7mSrOdMVN19AaeHSLEBGfRrIhRighMlqjdQUy+Rn+9InTrDBzcG9wmRXxuLqumWuZORs2ee7D10Jmj9bBSiLP+Gn3rujHdxWGpq3vTY/mzZg521uYYeIKkhFrtLaqT1ptWBbrrL/oURxkK9ABlJS7bL+teLcxDa4pr0hzhOBrHVDj3DlObPBaWjk6jxH0467T32KuO/jXiO5ejc34mFcvJvXgk5Rh5aqTWuaqeooUCsc4L9XldeWYS/Up8Rz6ycv0/urub6bHWXNuqeq1FD1QxLve9K4RX5ZR6O51onihG1C6N4/CL9CPi50xTW64bSrvbqTIvCjbVkH0c62F9DW4bhWk2e33j2J/0YVmR37GMzZmyEQ2ttyqN3n6+ZIReummNq3W4S0rsldNdMHf9oELKTWLhsrGLOFkelwuv5tSEOGh3tNPTlDs3VqjCuHqMGEHB5tt7R1fU6gGQmWcfEBRhWhJY4jzrzkS+D2BQH5BPUPmuLki2enUdJMV8ItabJOaRs/QPHueluZiFwpz3RbRlpHreevQN9EFBch9RioIFpmVO2jWiFEaIAvnPv/ogQ/fy5VtXjWP6IMSElnZWFUkOgw9TPy6h7+dVVh7azFe7BSJAHn4eo7LEWUQ7GasMEj/GNVJjWFIghzCh6GeDiKAAyCWp0M+hVfOg0/0ouVNhtBJAH6TvfuAAyIAVRGnI8iOeETlZYP+g35oOFhbFtwyVoA+S17OhxPMcK7JjURoLTPeyu3j+ZNgBBqiEOKFABqqRrTkj2swMaVH4w/lcsSNFjRTw2dFHMl7SH7YenuQ1t0B+69jOeO/poeidTG14cP1iwKVVOFHbGxcm/Ns/gAAZSE44Gaii5o+yIXcUmUC0ydTy2dFq7vH1WnG2J2uiWtFeR9LMPc2SdAoHNjPYno06Sq4pHKenimF30Go8p0gf59VKU6O3rlqAauyjX4uNexHP8ixOi4FpuXEsaQlBx4nYG+wveBoiBjIGb+uBHl2WLJ+vkQQXJqM2huCiXshMlrVhSBYskNbjTmgWRqP9JlZemX2fmeTHX4Xf49R51W1DjN5HP4Odg//t3Yt4F7Hhs/8Lxo/P5F8GcmJf0lMEV+M7l60TRwtt97Dope5sEsySbBmOBZI1Jr2VnIDA8/lXHxQJLMOcpEAGuIjzDIE+IHnVRVbPwvw3tVRF11Ul2nSNJ5CWyucYWDhFtIRpAWRGklhpOJIk5vVqR/JiAWkMZMBFO9u4guffbE7yjlMHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
