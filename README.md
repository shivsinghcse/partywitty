# Party Witty
> Send verified drink invites to people at your favorite venues

### Live Link
[https://partywittyassignment.netlify.app/](https://partywittyassignment.netlify.app/)

### Source Code
[https://github.com/shivsinghcse/partywitty](https://github.com/shivsinghcse/partywitty)

### **Features**
- Browse social feed of local venues and people nearby
- Select venues and explore live drink menus
- Face verification flow for trust & safety before sending invites
- Send "special invites" with drinks to break the ice
- Real-time order summary with smooth modal transitions
- Responsive UI with brand gradients and micro-interactions

### Screenshots


### **Tech Stack**
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Animations:** Framer Motion
- **State:** React Hooks + localStorage for verification persistence

### **Brand Colors**
```css
/* Primary gradient - CTAs, highlights, active states */
--brand-pink: linear-gradient(81.67deg, #C229C0 -0.79%, #FC4B6A 89.7%);

/* Border gradient - avatars, verified badges */
--brand-blue: linear-gradient(81.67deg, #7464E4 -0.79%, #1A00D2 89.7%);
```

## Getting Started

```cse
git clone https://github.com/yourusername/party-witty.git
cd party-witty
npm install
npm run dev
```

### Project Structure
```
src/
├── components/
│   ├── Main.jsx                 # Feed + verification trigger
│   ├── Sidebar.jsx              # Nav + verified status
│   ├── GetVerified.jsx          # Verification CTA card
│   ├── VenueSelection.jsx       # Venue picker
│   ├── BuyDrinks.jsx            # Drink menu + invite modal
│   └── verification/
│       ├── VerificationIntro.jsx    # Step 1: Explain flow
│       ├── VerificationScan.jsx     # Step 2: Face scan UI
│       ├── VerificationSuccess.jsx  # Step 3: Success state
│       └── VerificationVibe.jsx     # Step 4: Post-verify screen
├── App.jsx                      # View routing + state
└── main.jsx
```

### Key Flows
> 1. feed → venues → drinks → order → invite sent
> 2. Get Verified → verify-intro → verify-scan → verify-success → verify-vibe → feed