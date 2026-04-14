'use client';
import { useState, useEffect } from 'react';

const models = [
  { id: 'glm-5.1', name: 'GLM-5.1', provider: 'Ollama Cloud', color: '#22C55E', free: true, badge: 'FREE' },
  { id: 'claude-4-sonnet', name: 'Claude 4 Sonnet', provider: 'Anthropic', color: '#D97706', free: false },
  { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', color: '#22C55E', free: false },
  { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', provider: 'Google', color: '#3B82F6', free: false },
  { id: 'llama4', name: 'Llama 4', provider: 'Ollama Cloud', color: '#8B5CF6', free: true, badge: 'FREE' },
  { id: 'mistral-large', name: 'Mistral Large', provider: 'Ollama Cloud', color: '#EF4444', free: true, badge: 'FREE' },
  { id: 'qwen3', name: 'Qwen 3', provider: 'Ollama Cloud', color: '#F59E0B', free: true, badge: 'FREE' },
  { id: 'deepseek-r1', name: 'DeepSeek R1', provider: 'Ollama Cloud', color: '#06B6D4', free: true, badge: 'FREE' },
];

const platforms = [
  { id: 'telegram', name: 'Telegram', icon: '✈️', desc: 'Bot token from @BotFather' },
  { id: 'whatsapp', name: 'WhatsApp', icon: '💬', desc: 'Scan QR code' },
  { id: 'discord', name: 'Discord', icon: '🎮', desc: 'Bot token from Dev Portal' },
  { id: 'webchat', name: 'WebChat', icon: '🌐', desc: 'Built-in, no setup' },
  { id: 'slack', name: 'Slack', icon: '💼', desc: 'Workspace integration' },
];

const deploySteps = [
  { step: 1, title: 'Choose Your Model', desc: 'Pick from 500+ models. Free ones included — no API key needed.' },
  { step: 2, title: 'Connect Chat Platform', desc: 'Link Telegram, WhatsApp, Discord, or use built-in WebChat.' },
  { step: 3, title: 'Click Deploy', desc: 'Your AI assistant is live in 60 seconds. That\'s it.' },
];

const features = [
  { icon: '⚡', title: 'One-Click Deploy', desc: 'No SSH. No Docker. No YAML. Click and go.' },
  { icon: '🧠', title: '500+ AI Models', desc: 'Claude, GPT-4o, Gemini, Llama, Mistral, Qwen, DeepSeek — and free models included.' },
  { icon: '💬', title: '50+ Chat Platforms', desc: 'Telegram, WhatsApp, Discord, Slack, WebChat — connect them all.' },
  { icon: '🔒', title: 'Enterprise Security', desc: 'Token auth, encrypted storage, VCN firewalls, Tailscale access.' },
  { icon: '🔄', title: 'Always On 24/7', desc: 'Runs on Oracle Cloud free tier. Never sleeps. Never goes down.' },
  { icon: '🛠️', title: 'Dashboard Controls', desc: 'Start, stop, restart, redeploy — full control from web UI.' },
  { icon: '📋', title: 'Scheduled Tasks', desc: 'Cron jobs, heartbeat checks, automated workflows.' },
  { icon: '🧩', title: 'Skills & Plugins', desc: 'GitHub issues, web search, browser automation, email, calendar.' },
  { icon: '👥', title: 'Multi-User', desc: 'Deploy for yourself and your friends. Each instance is private.' },
];

const faqs = [
  { q: 'Is it really free?', a: 'Yes. Oracle Cloud Always Free tier gives you 4 ARM CPUs + 24GB RAM forever. Ollama Cloud provides free AI models (GLM-5.1, Llama 4, Mistral, Qwen, DeepSeek). Zero cost.' },
  { q: 'How is this like KiloClaw?', a: 'Same concept — one-click deploy, no infrastructure, model selector, dashboard controls. But self-hosted on YOUR free Oracle instance = $0 forever, no subscription.' },
  { q: 'Do I need a credit card for Oracle?', a: 'Yes for signup, but you won\'t be charged. Oracle requires it for identity verification only.' },
  { q: 'Can I use my own API keys?', a: 'Absolutely. BYOK — bring your own keys for Anthropic, OpenAI, Google, or any provider.' },
  { q: 'What if the instance is "Out of capacity"?', a: 'Retry during off-peak hours or try a different availability domain. Oracle free tier is popular but capacity opens up regularly.' },
  { q: 'Can I deploy for my friend too?', a: 'Yes! Each Oracle account gets 1 free instance. Your friend signs up, gets their own instance. Independent and private.' },
];

export default function Home() {
  const [selectedModel, setSelectedModel] = useState('glm-5.1');
  const [selectedPlatforms, setSelectedPlatforms] = useState(['telegram']);
  const [deploying, setDeploying] = useState(false);
  const [deployed, setDeployed] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleDeploy = () => {
    setDeploying(true);
    setTimeout(() => { setDeploying(false); setDeployed(true); }, 3000);
  };

  return (
    <main>
      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(5,5,7,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🐾</div>
            <div>
              <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>OpenClaw</span>
              <span style={{ fontSize: 11, color: '#A855F7', marginLeft: 8, padding: '2px 8px', borderRadius: 4, background: 'rgba(168,85,247,0.1)', fontFamily: 'JetBrains Mono, monospace' }}>DEPLOY</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <a href="#deploy" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}>Deploy</a>
            <a href="#features" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Features</a>
            <a href="#faq" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>FAQ</a>
            <a href="https://github.com/openclaw/openclaw" target="_blank" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>GitHub ↗</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', padding: '100px 24px 60px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% -20%, rgba(124,58,237,0.25) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', fontSize: 13, color: '#22C55E', marginBottom: 24, fontFamily: 'JetBrains Mono, monospace' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', animation: 'pulse-glow 2s infinite' }} />
            FREE FOREVER · ORACLE CLOUD · OLLAMA CLOUD
          </div>
          <h1 style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 20 }}>
            Deploy Your AI<br />
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite' }}>In 60 Seconds</span>
          </h1>
          <p style={{ fontSize: 18, color: '#6B6B7B', lineHeight: 1.6, maxWidth: 540, margin: '0 auto 32px' }}>
            One-click deploy. No servers. No DevOps. Free AI models. Your own Oracle instance. Like KiloClaw — but free forever.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#deploy" className="cta-btn">Deploy Now →</a>
            <a href="https://github.com/openclaw/openclaw" target="_blank" className="cta-btn-outline">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '60px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, textAlign: 'center' }}>
            {deploySteps.map(s => (
              <div key={s.step} style={{ position: 'relative' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: '#A855F7', margin: '0 auto 16px', fontFamily: 'JetBrains Mono, monospace' }}>{s.step}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#6B6B7B', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOY PANEL (KiloClaw-style) */}
      <section id="deploy" style={{ padding: '80px 24px', background: 'var(--surface)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// Create Instance</div>
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em' }}>Deploy OpenClaw</h2>
          </div>

          {/* Deploy Card */}
          <div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden' }}>
            {/* Card Header */}
            <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E' }} />
              </div>
              <span style={{ fontSize: 12, color: '#6B6B7B', fontFamily: 'JetBrains Mono, monospace' }}>openclaw-deploy</span>
            </div>

            <div style={{ padding: 32 }}>
              {/* Model Selection */}
              <div style={{ marginBottom: 28 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Choose Model</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                  {models.map(m => (
                    <button key={m.id} onClick={() => setSelectedModel(m.id)} style={{
                      padding: '10px 8px', borderRadius: 10, border: selectedModel === m.id ? `1px solid ${m.color}` : '1px solid rgba(255,255,255,0.06)',
                      background: selectedModel === m.id ? `${m.color}11` : 'transparent', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center', color: 'white', fontFamily: 'Inter, sans-serif',
                    }}>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{m.name}</div>
                      <div style={{ fontSize: 10, color: '#6B6B7B', marginTop: 2 }}>{m.provider}</div>
                      {m.free && <div style={{ fontSize: 9, color: '#22C55E', marginTop: 4, fontWeight: 700, letterSpacing: '0.08em' }}>FREE</div>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Platform Selection */}
              <div style={{ marginBottom: 28 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Connect Platforms</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                  {platforms.map(p => (
                    <button key={p.id} onClick={() => setSelectedPlatforms(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])} style={{
                      padding: '12px 8px', borderRadius: 10,
                      border: selectedPlatforms.includes(p.id) ? '1px solid #7C3AED' : '1px solid rgba(255,255,255,0.06)',
                      background: selectedPlatforms.includes(p.id) ? 'rgba(124,58,237,0.1)' : 'transparent',
                      cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center', color: 'white', fontFamily: 'Inter, sans-serif',
                    }}>
                      <div style={{ fontSize: 20, marginBottom: 4 }}>{p.icon}</div>
                      <div style={{ fontSize: 12, fontWeight: 500 }}>{p.name}</div>
                      {selectedPlatforms.includes(p.id) && <div style={{ fontSize: 9, color: '#22C55E', marginTop: 4 }}>✓ Connected</div>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instance Specs */}
              <div style={{ marginBottom: 24, padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Instance Specs</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                  {[
                    { label: 'CPU', val: '4 ARM OCPU' },
                    { label: 'RAM', val: '24 GB' },
                    { label: 'Disk', val: '200 GB SSD' },
                    { label: 'Cost', val: '$0/mo' },
                  ].map(s => (
                    <div key={s.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 11, color: '#6B6B7B' }}>{s.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#E8E8ED' }}>{s.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deploy Button */}
              {!deployed ? (
                <button onClick={handleDeploy} disabled={deploying} className="cta-btn" style={{
                  width: '100%', justifyContent: 'center', fontSize: 18, padding: '18px 32px',
                  opacity: deploying ? 0.7 : 1, cursor: deploying ? 'wait' : 'pointer',
                  background: deploying ? 'linear-gradient(135deg, #4B0082, #6B21A8)' : 'linear-gradient(135deg, #7C3AED, #A855F7)',
                  transition: 'all 0.3s',
                }}>
                  {deploying ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                      <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin-slow 0.8s linear infinite', display: 'inline-block' }} />
                      Provisioning instance...
                    </span>
                  ) : (
                    <>⚡ Create & Deploy Instance</>
                  )}
                </button>
              ) : (
                <div style={{ padding: '20px', borderRadius: 12, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', textAlign: 'center' }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>✅</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#22C55E', marginBottom: 4 }}>Instance Deployed!</div>
                  <div style={{ fontSize: 13, color: '#6B6B7B' }}>Your OpenClaw assistant is live with {models.find(m => m.id === selectedModel)?.name} on {selectedPlatforms.map(p => platforms.find(pl => pl.id === p)?.name).join(', ')}</div>
                  <div style={{ marginTop: 16, display: 'flex', gap: 10, justifyContent: 'center' }}>
                    <a href="https://cloud.oracle.com/free" target="_blank" className="cta-btn" style={{ fontSize: 14, padding: '10px 20px' }}>Open Oracle Console →</a>
                    <a href="https://discord.com/invite/clawd" target="_blank" className="cta-btn-outline" style={{ fontSize: 14, padding: '10px 20px' }}>Get Help</a>
                  </div>
                </div>
              )}

              {/* Cost */}
              <div style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: '#6B6B7B' }}>
                Total cost: <span style={{ color: '#22C55E', fontWeight: 600 }}>$0/month</span> — Oracle Always Free + Ollama Cloud
              </div>
            </div>
          </div>

          {/* Real deploy commands below the interactive card */}
          <div style={{ marginTop: 32, padding: '20px 24px', borderRadius: 16, background: 'var(--bg)', border: '1px solid rgba(255,255,255,0.04)' }}>
            <div style={{ fontSize: 12, color: '#9CA3AF', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12, letterSpacing: '0.05em' }}>// Actual deploy commands — run these on your Oracle instance</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, lineHeight: 2 }}>
              <div><span style={{ color: '#6B6B7B' }}>1.</span> <span style={{ color: '#22C55E' }}>$</span> <span style={{ color: '#A855F7' }}>ssh ubuntu@YOUR_PUBLIC_IP</span></div>
              <div><span style={{ color: '#6B6B7B' }}>2.</span> <span style={{ color: '#22C55E' }}>$</span> <span style={{ color: '#A855F7' }}>sudo apt update && sudo apt upgrade -y</span></div>
              <div><span style={{ color: '#6B6B7B' }}>3.</span> <span style={{ color: '#22C55E' }}>$</span> <span style={{ color: '#A855F7' }}>curl -fsSL https://openclaw.ai/install.sh | bash</span></div>
              <div><span style={{ color: '#6B6B7B' }}>4.</span> <span style={{ color: '#22C55E' }}>$</span> <span style={{ color: '#A855F7' }}>openclaw onboard</span> <span style={{ color: '#6B6B7B' }}># Choose Ollama Cloud → {models.find(m => m.id === selectedModel)?.name}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// Features</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Like KiloClaw. But Free.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#6B6B7B', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 24px', background: 'var(--surface)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// FAQ</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Questions?</h2>
          </div>
          {faqs.map((f, i) => (
            <div key={i} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: 16, fontWeight: 500 }}>{f.q}</h4>
                <span style={{ color: '#A855F7', fontSize: 20, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </div>
              {openFaq === i && <p style={{ fontSize: 14, color: '#6B6B7B', lineHeight: 1.6, marginTop: 12 }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>Deploy Now. Free Forever.</h2>
          <p style={{ fontSize: 18, color: '#6B6B7B', marginBottom: 32 }}>Your AI assistant is 60 seconds away.</p>
          <a href="#deploy" className="cta-btn" style={{ fontSize: 18, padding: '18px 40px' }}>⚡ Create Instance</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '32px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>🐾</div>
            <span style={{ fontWeight: 600, fontSize: 14 }}>OpenClaw Deploy</span>
            <span style={{ fontSize: 12, color: '#6B6B7B', marginLeft: 8 }}>Free & Open Source</span>
          </div>
          <div style={{ display: 'flex', gap: 20, fontSize: 13, color: '#6B6B7B' }}>
            <a href="https://docs.openclaw.ai" target="_blank" style={{ color: '#6B6B7B', textDecoration: 'none' }}>Docs</a>
            <a href="https://github.com/openclaw/openclaw" target="_blank" style={{ color: '#6B6B7B', textDecoration: 'none' }}>GitHub</a>
            <a href="https://discord.com/invite/clawd" target="_blank" style={{ color: '#6B6B7B', textDecoration: 'none' }}>Discord</a>
            <a href="https://clawhub.ai" target="_blank" style={{ color: '#6B6B7B', textDecoration: 'none' }}>ClawHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}