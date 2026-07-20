// Password Verification
const passwordInput = document.getElementById('password-input');
const lockScreen = document.getElementById('lock-screen');
const desktopScreen = document.getElementById('desktop-screen');
const bgMusic = document.getElementById('bg-music');

passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (passwordInput.value === '02062026') {
            lockScreen.classList.add('hidden');
            desktopScreen.classList.remove('hidden');
        } else {
            passwordInput.value = '';
            passwordInput.placeholder = 'Wrong password! Try again 🤍';
        }
    }
});

// Real-time Clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('clock').innerText = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();

// App Window Management
const appWindow = document.getElementById('app-window');
const windowTitle = document.getElementById('window-title');
const windowContent = document.getElementById('window-content');

// Track completed apps for secret unlock
let openedApps = new Set();

function openApp(appName) {
    appWindow.classList.remove('hidden');
    openedApps.add(appName);
    
    // Check if user has unlocked secret
    if (openedApps.size >= 5) {
        document.getElementById('secret-app-icon').classList.remove('locked-icon');
    }

    if (appName === 'mail') {
        windowTitle.innerText = 'Mail — Inbox';
        windowContent.innerHTML = `
            <div class="mail-layout" style="display: flex; height: 100%; gap: 15px;">
                <div class="mail-list" style="width: 220px; border-right: 1px solid rgba(255,255,255,0.1); padding-right: 10px; overflow-y: auto;">
                    <p onclick="loadEmail(1)" style="padding: 8px; cursor: pointer; border-radius: 6px; background: rgba(255,255,255,0.1); margin-bottom: 5px; font-size: 13px;">1. Hey Dude...</p>
                    <p onclick="loadEmail(2)" style="padding: 8px; cursor: pointer; border-radius: 6px; margin-bottom: 5px; font-size: 13px;">2. Tapir & Tenge Lore 💀</p>
                    <p onclick="loadEmail(3)" style="padding: 8px; cursor: pointer; border-radius: 6px; margin-bottom: 5px; font-size: 13px;">3. The Safe Place</p>
                    <p onclick="loadEmail(4)" style="padding: 8px; cursor: pointer; border-radius: 6px; margin-bottom: 5px; font-size: 13px;">4. Gaslighting Incident 😭</p>
                    <p onclick="loadEmail(5)" style="padding: 8px; cursor: pointer; border-radius: 6px; margin-bottom: 5px; font-size: 13px;">5. The Website</p>
                    <p onclick="loadEmail(6)" style="padding: 8px; cursor: pointer; border-radius: 6px; margin-bottom: 5px; font-size: 13px;">6. Official? 🤍</p>
                    <p onclick="loadEmail(7)" style="padding: 8px; cursor: pointer; border-radius: 6px; margin-bottom: 5px; font-size: 13px;">7. Dab Me Up 🥹</p>
                    <p onclick="loadEmail(8)" style="padding: 8px; cursor: pointer; border-radius: 6px; font-size: 13px;">8. Nickname Lore Fr</p>
                </div>
                <div class="mail-view" id="email-body-view" style="flex-grow: 1; overflow-y: auto; padding-left: 10px; font-size: 14px; line-height: 1.5;">
                    <p style="color: rgba(255,255,255,0.5); text-align: center; margin-top: 50px;">Select an email from the left to read 💌</p>
                </div>
            </div>
        `;
    } else if (appName === 'notes') {
        windowTitle.innerText = 'Notes — Little Thoughts';
        windowContent.innerHTML = `
            <div style="font-size: 14px; line-height: 1.6;">
                <h3 style="color: #ffb6c1; margin-bottom: 10px;">✨ Things I never said out loud</h3>
                <p>• I still laugh about how we started with "hey dude."</p>
                <p>• You became my favorite notification.</p>
                <p>• The smallest things you do mean a lot to me.</p>
                <p>• I hope you know how special you are.</p>
                <p>• Somehow you became my comfort person.</p>
                
                <h3 style="color: #ffb6c1; margin-top: 20px; margin-bottom: 10px;">🧸 Tapir.exe Information</h3>
                <p><b>Name:</b> Tapir 🧸</p>
                <p><b>Features:</b> ✓ makes me laugh | ✓ annoying sometimes | ✓ secretly cute | ✓ professional Tenge bully</p>
                <p><b>Warning:</b> Very lovable.</p>

                <h3 style="color: #ffb6c1; margin-top: 20px; margin-bottom: 10px;">🌱 Future Updates (Nulsyy & Tapir v2.0)</h3>
                <p>☐ More memories</p>
                <p>☐ More jokes</p>
                <p>☐ More birthdays</p>
                <p>☐ More adventures</p>
                <p style="margin-top: 10px; color: #7fffd4;"><b>Status:</b> Loading...</p>
            </div>
        `;
    } else if (appName === 'photos') {
        windowTitle.innerText = 'Photos — Memories';
        windowContent.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; text-align: center;">
                <div style="background: white; padding: 15px 15px 25px 15px; border-radius: 4px; color: #333; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
                    <img src="assets/images/photo1.png" style="width: 100%; height: 160px; object-fit: cover; border-radius: 2px; margin-bottom: 10px;" alt="Memory">
                    <p style="font-family: monospace; font-size: 13px;">One of my favorite memories 🤍</p>
                </div>
                <div style="background: white; padding: 15px 15px 25px 15px; border-radius: 4px; color: #333; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
                    <img src="assets/images/photo2.png" style="width: 100%; height: 160px; object-fit: cover; border-radius: 2px; margin-bottom: 10px;" alt="Memory">
                    <p style="font-family: monospace; font-size: 13px;">Little moments that mean everything.</p>
                </div>
                <div style="background: white; padding: 15px 15px 25px 15px; border-radius: 4px; color: #333; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
                    <img src="assets/images/photo3.jpg" style="width: 100%; height: 160px; object-fit: cover; border-radius: 2px; margin-bottom: 10px;" alt="Memory">
                    <p style="font-family: monospace; font-size: 13px;">More memories loading...</p>
                </div>
                <div style="background: rgba(255,255,255,0.05); border: 2px dashed rgba(255,255,255,0.2); border-radius: 8px; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px;">
                    <video src="assets/videos/video1.mp4" controls style="width: 100%; height: 140px; border-radius: 4px; object-fit: cover;"></video>
                    <p style="font-size: 12px; margin-top: 8px; opacity: 0.8;">Our clip 🎥</p>
                </div>
            </div>
        `;
    } else if (appName === 'timeline') {
        windowTitle.innerText = 'Timeline — Our Story';
        windowContent.innerHTML = `
            <div style="padding-left: 20px; border-left: 2px solid rgba(255,255,255,0.3); display: flex; flex-direction: column; gap: 25px;">
                <div>
                    <span style="background: #ffb6c1; color: #111; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">23 December 2025</span>
                    <h4 style="margin-top: 5px;">🤍 First met ("Hey dude")</h4>
                </div>
                <div>
                    <span style="background: #ffb6c1; color: #111; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">May 2026</span>
                    <h4 style="margin-top: 5px;">🌸 Became closer & matching pfps</h4>
                </div>
                <div>
                    <span style="background: #ffb6c1; color: #111; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">2 June 2026</span>
                    <h4 style="margin-top: 5px;">💌 Official</h4>
                </div>
                <div>
                    <span style="background: #ffb6c1; color: #111; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">27 June 2026</span>
                    <h4 style="margin-top: 5px;">✨ First meetup IRL</h4>
                </div>
                <div style="opacity: 0.5;">
                    <span style="background: rgba(255,255,255,0.2); color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px;">Future</span>
                    <h4 style="margin-top: 5px;">✨ More memories to be loaded...</h4>
                </div>
            </div>
        `;
    } else if (appName === 'games') {
        windowTitle.innerText = 'Mini Game — Heart Collector';
        windowContent.innerHTML = `
            <div style="text-align: center; margin-top: 40px;">
                <h3>Catch the love for Tapir 🤍</h3>
                <p id="game-score" style="font-size: 20px; margin: 15px 0;">Score: 0 / 5</p>
                <div id="game-area" style="height: 220px; position: relative; background: rgba(0,0,0,0.2); border-radius: 10px; overflow: hidden; cursor: crosshair;" onclick="catchHeart()">
                    <span id="heart-target" style="position: absolute; font-size: 28px; cursor: pointer; user-select: none;">🤍</span>
                </div>
            </div>
        `;
        initGame();
    } else if (appName === 'secret') {
        windowTitle.innerText = 'Secret.exe 🔒 — Birthday Reveal';
        bgMusic.play();
        windowContent.innerHTML = `
            <div style="text-align: center; padding: 20px; animation: fadeIn 1s ease-in-out;">
                <h2 style="color: #ffb6c1; margin-bottom: 10px;">✨ HAPPY BIRTHDAY MY LOVE!!! ✨</h2>
                <p style="font-size: 18px; margin-bottom: 20px;">🌸 💌 🌸</p>
                <div style="background: rgba(255,255,255,0.08); padding: 25px; border-radius: 12px; text-align: left; line-height: 1.6; font-size: 14px; border: 1px solid rgba(255,255,255,0.15);">
                    <h3 style="color: #ffb6c1; margin-bottom: 10px; text-align: center;">My Promise To You</h3>
                    <p>I don't know what the future is going to look like, and I don't know where life is going to take us, but I do know one thing...</p>
                    <p style="margin-top: 10px;"><b>I want to keep choosing you.</b></p>
                    <p style="margin-top: 10px;">I promise to keep being the annoying person who teases you, laughs at your dumb jokes, remembers the little things, and reminds you how much you matter. I promise that even when things get hard, I'll still be cheering for you in my own chaotic way :3</p>
                    <p style="margin-top: 10px;">Thank you for being someone I can laugh with, talk to, and make memories with.</p>
                    <p style="margin-top: 15px; text-align: center;">So yeah...<br><b>You're stuck with me now BLEHHHH :P</b><br>Thanks for not getting rid of me, even when I was a "dude" named Tenge 😭🙏</p>
                    <p style="text-align: center; font-size: 20px; margin-top: 15px;">🌸🧸🌸</p>
                </div>
            </div>
        `;
    }
}

function closeApp() {
    appWindow.classList.add('hidden');
    bgMusic.pause();
    bgMusic.currentTime = 0;
}

// Email Content Loader
function loadEmail(id) {
    const view = document.getElementById('email-body-view');
    const emails = {
        1: `<b>Subject: Hey Dude...</b><br><i>23 December 2025</i><br><br>Okay, I still can't believe this is how everything started 😭<br><br>Like seriously... you thought I was a dude.<br>"Hey dude."<br>BROOO 💀<br><br>Imagine the person who would later become one of the most important people in your life started off as some random "guy" you thought you met online. The funniest part is that you were so confident about it too 😭<br><br>And then Ranuki had to come in and save you from your own confusion by telling you I wasn't a dude 💀<br><br>I'm kinda glad it did though. Because even though it was such a random way to meet, it became the beginning of something I never expected.🤍`,
        2: `<b>Subject: Tapir & Tenge Lore 💀</b><br><br>Okay, but we still need to talk about something...<br>The fact that you actually called me "Darkest" 😭<br><br>Like excuse me, sir??? How could you do that to me 😔<br>I was just there, existing, and you decided that "Darkest" was my name now 💀<br><br>Yeah, I'm definitely lovesick, goddamn it 😭😭<br>And how could you call me Tenge? Tapirs are cute, okay? :3<br><br>Frick you, I hate you 🥺<br>Okay, okay... Tapir and Tenge are actually a pretty goated duo.<br>You're stuck with me now. BLEHHHH :P`,
        3: `<b>Subject: The Safe Place</b><br><br>Do you remember those days when everything was messed up? When the friend group was falling apart and everything was just... a lot?<br><br>I wouldn't want to remember those times, but I do. Because somehow, those moments brought us closer. I'm glad you trusted me enough to talk to me.<br><br>You always say I helped you, but honestly, it hurts knowing someone I care about so much had to go through hard times.<br><br>Just remember: You matter. A lot. 🤍`,
        4: `<b>Subject: Gaslighting Incident 😭</b><br><br>AHH THIS. I still laugh about this.<br>I can't believe you actually fell for it. When I said I connected that song to Senula, I just wanted to see your reaction. I wanted to know if you would get jealous 😭<br><br>But then YOU were the one trying to set me up with another guy.<br><br>Anyway... I still can't believe you liked me. Not just because of how I looked, but because of who I was. I never thought I was someone you would choose. But somehow... you did.`,
        5: `<b>Subject: The Website</b><br><br>Honestly? This deserves appreciation.<br>The moment I clicked on it... and saw all those little details... it meant so much. To think someone would put that much effort into something just for me... I can't even explain it.<br><br>And the fact that I clicked "maybe" first because I wanted to read everything 😭<br>I felt every bit of effort you put into it. You trusted me with something so vulnerable. And I treasure that.`,
        6: `<b>Subject: Official? 🤍</b><br><i>2 June 2026</i><br><br>God. I remember this.<br>Somehow you found your way into my heart and my head. You sneaky little thing 😭<br><br>I probably looked so silly that day at the exam hall because I would randomly start smiling. My brain literally went:<br>"hehe Adan 😭"<br><br>WHAT HAVE YOU DONE TO ME?!<br>I'm in love. I'M ACTUALLY IN LOVE 😭💗`,
        7: `<b>Subject: Dab Me Up 🥹</b><br><br>Seriously... We actually met.<br>I will never forget that day. The car ride. The park. Everything.<br><br>It felt unreal. I was so happy.<br>I love you so much. More than you probably realize.`,
        8: `<b>Subject: Nickname Lore Fr</b><br><br>NAH THE SWITCH UP 😭<br>We really went from:<br>Tapir & Tenge 💀<br>to:<br>Little Flower 🌸 & Teddy Bear 🧸<br><br>I can't. This is too funny.<br>But honestly? I wouldn't change it.`
    };
    view.innerHTML = emails[id] || '';
}

// Mini Game Logic
let gameScore = 0;
function initGame() {
    gameScore = 0;
    moveHeart();
}

function moveHeart() {
    const heart = document.getElementById('heart-target');
    const area = document.getElementById('game-area');
    if (!heart || !area) return;
    
    const maxX = area.clientWidth - 40;
    const maxY = area.clientHeight - 40;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    heart.style.left = randomX + 'px';
    heart.style.top = randomY + 'px';
}

function catchHeart() {
    gameScore++;
    document.getElementById('game-score').innerText = `Score: ${gameScore} / 5`;
    if (gameScore >= 5) {
        document.getElementById('game-area').innerHTML = `<h3 style="color: #7fffd4; margin-top: 80px;">❤️ Achievement unlocked: You found enough love. Secret.exe fully unlocked!</h3>`;
        document.getElementById('secret-app-icon').classList.remove('locked-icon');
    } else {
        moveHeart();
    }
}
