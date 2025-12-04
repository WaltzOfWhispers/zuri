# Zuri — Private, Cross‑Chain Settlement (Zypherpunk Hackathon)

Zuri lets anyone fund on one rail (ETH Sepolia or SOL devnet) and deliver privately to another (ETH or SOL) without exposing the path. Intents live on NEAR, privacy layer is enabled by ZCash.

## Why it fits Zypherpunk
- **Privacy-first**: Users never see the rails (NEAR/ZEC); only source/dest are exposed.
- **Cross‑chain**: ETH ↔ SOL today; intent infra is chain-agnostic.
- **Hackable**: Mock solver + stubbed ZEC lets you demo end-to-end fast; swap stubs for real rails post-hackathon.

## Architecture
- **Frontend**: React/Vite/TS, WalletConnect (EVM), Phantom (Solana). Single-page form + timeline.
- **Backend**: Node/TS, Express REST, in-memory payments, ETH & SOL funding verification, NEAR intent poster, solver loop (mock payouts by default).
- **NEAR contract**: Rust, stores intents, mark_fulfilled.
- **Privacy layer**: Zcash stub (interface ready; replace with light client later).

## Run It (local)
```bash
git clone <repo>
cd zuri
```
Backend
```bash
cd backend
npm install
cp .env.example .env   # fill values below
npm run dev
```
Frontend
```bash
cd frontend
npm install
cp .env.example .env   # set WC project ID + Solana vars
npm run dev
```
NEAR contract
```bash
cd near-contract
cargo near build   # deploy to NEAR testnet and set NEAR_CONTRACT_ID in backend env
```

## Required Env (fast path)
Backend `.env`:
- `SEPOLIA_RPC_URL`, `COLLECTOR_ADDRESS`
- `NEAR_CONTRACT_ID`, `NEAR_ACCOUNT_ID`, `NEAR_PRIVATE_KEY`, `NEAR_NODE_URL`
- `SOL_RPC_URL=https://api.devnet.solana.com`
- `SOL_COLLECTOR_ADDRESS=<devnet collector>`
- Optional: `MOCK_SOLVER_TX=true` to mock payouts

Frontend `.env`:
- `VITE_WALLETCONNECT_PROJECT_ID=<your_wc_project_id>`
- `VITE_SOL_COLLECTOR_ADDRESS=<same as backend>`
- `VITE_SOL_RPC_URL=https://api.devnet.solana.com`

## API (for scripts/cli)
- `POST /api/create-payment-intent` `{ recipient, destAsset, destAmount, payAsset }`
- `POST /api/attach-funding-tx` `{ paymentId, fundingTxHash }`
- `GET /api/payment-status?paymentId=...`
- `GET /api/payments` (debug)

## Shipped vs Stubbed
- ✅ ETH & SOL funding, verification, NEAR intents, explorer links, mock solver.
- ⏳ USDC pay-in, real Zcash burns, production solver payouts (interfaces ready).

## Troubleshooting
- Stuck at CREATED: funding tx hash not attached (send failed or attach didn’t fire); attach manually via API.
- Stuck at WAITING_FOR_FUNDING: verification failed (wrong network/collector/amount); confirm RPC/envs and tx details.
- Phantom issues: ensure Devnet + valid collector address; non-zero amount.
- Build errors: run `npm install` in backend/frontend; Node required.

## One-liner
“Zuri is the private cross-chain router: fund on ETH or SOL, deliver privately anywhere, with intents on NEAR and a drop-in Zcash privacy layer—demo-ready in minutes, production-ready with oracles/solvers.”
