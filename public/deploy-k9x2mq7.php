<?php
// ============================================================
//  ANNUR ISLAMIC ACADEMY — SECRET DEPLOY TRIGGER
//  URL: https://annurislamicacademy.edu.bd/deploy-k9x2mq7.php
//  ⚠️  DELETE THIS FILE AFTER USE!
// ============================================================

set_time_limit(90);
ini_set('max_execution_time', 90);
ignore_user_abort(true); // ✅ Browser বন্ধ হলেও script শেষ পর্যন্ত চলবে!

// Disable output buffering so browser gets live output
if (ob_get_level()) ob_end_clean();

header('Content-Type: text/html; charset=utf-8');
header('X-Accel-Buffering: no');   // Disable nginx/LiteSpeed buffering
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');

// Detect home directory dynamically (works on any cPanel account)
$home = getenv('HOME');
if (!$home) {
    $home = '/home/' . get_current_user();
}

?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Deploy — Annur Islamic Academy</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #0d1117;
    color: #e6edf3;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    padding: 24px;
  }
  h2 {
    color: #58a6ff;
    margin-bottom: 16px;
    font-size: 18px;
    border-bottom: 1px solid #30363d;
    padding-bottom: 10px;
  }
  .log {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
    padding: 16px;
    white-space: pre-wrap;
    word-break: break-all;
    line-height: 1.6;
  }
  .step  { color: #58a6ff; font-weight: bold; }
  .ok    { color: #3fb950; }
  .warn  { color: #f0883e; }
  .dim   { color: #8b949e; }
  .ping  { color: #79c0ff; }
</style>
</head>
<body>
<h2>🚀 Annur Islamic Academy — Deploy Trigger</h2>
<div class="log">
<?php

// Helper: print immediately to browser
function out($line, $class = '') {
    if ($class) {
        echo '<span class="' . $class . '">' . htmlspecialchars($line) . '</span>' . "\n";
    } else {
        echo htmlspecialchars($line) . "\n";
    }
    flush();
}

// Helper: run a shell command and stream output
function run($label, $cmd) {
    out(">>> " . $label, 'step');

    if (!function_exists('shell_exec')) {
        out("    [ERROR] shell_exec() is disabled on this server.", 'warn');
        return false;
    }

    $result = shell_exec($cmd . ' 2>&1');

    if ($result === null) {
        out("    [ERROR] Command returned null — shell_exec may be restricted.", 'warn');
        return false;
    }

    $lines = explode("\n", trim($result));
    foreach ($lines as $l) {
        out("    " . $l);
    }
    out("", '');
    return true;
}

// ─── Banner ─────────────────────────────────────────────────
out("============================================", 'dim');
out(" DEPLOY STARTED: " . date('Y-m-d H:i:s T'), 'ok');
out(" Server Home   : " . $home, 'dim');
out("============================================", 'dim');
out("", '');
flush();

// ─── Step 1: Update Frontend ─────────────────────────────────
run(
    "[1/3] Updating Frontend (public_html)...",
    "cd {$home}/public_html && git config core.sparseCheckout true && mkdir -p .git/info && echo \"dist/*\" > .git/info/sparse-checkout && git fetch origin main && git reset --hard origin/main && cp -rf dist/. ."
);

// ─── Step 2: Update Backend ──────────────────────────────────
run(
    "[2/3] Updating Backend...",
    "cd {$home}/backend && git fetch origin main && git reset --hard origin/main"
);

// ─── Step 3: Restart Node.js ─────────────────────────────────
out(">>> [3/3] Restarting Node.js Server...", 'step');
// 1. Kill any running lsnode processes
$killCmd = 'pids=$(pgrep -f lsnode 2>/dev/null); if [ -n "$pids" ]; then kill -9 $pids 2>&1; echo "Killed PID(s): $pids"; else echo "No active lsnode PID found to kill."; fi';
$killOutput = shell_exec($killCmd);

// 2. Also touch restart.txt for LiteSpeed / cPanel Node app manager
@shell_exec("mkdir -p {$home}/backend/tmp 2>&1 && touch {$home}/backend/tmp/restart.txt 2>&1");

if ($killOutput !== null && trim($killOutput) !== '') {
    out("    " . trim($killOutput), 'ok');
}
out("    ✓ Node.js restart signal sent successfully.", 'ok');
out("", '');

// ─── Deploy Complete ─────────────────────────────────────────
out("============================================", 'dim');
out(" ✅ DEPLOY COMPLETE!", 'ok');
out(" Pinging server for 15 seconds...", 'dim');
out("============================================", 'dim');
out("", '');
flush();

// ─── Ping 15 times ───────────────────────────────────────────
$ping = shell_exec('ping -c 15 -W 1 annurislamicacademy.edu.bd 2>&1');
if ($ping) {
    $pingLines = explode("\n", trim($ping));
    foreach ($pingLines as $pl) {
        out($pl, 'ping');
        flush();
    }
} else {
    out("(ping not available on this server)", 'warn');
}

out("", '');
out("============================================", 'dim');
out(" 🎉 ALL DONE! Site should be live now.", 'ok');
out(" ⚠️  Remember to DELETE this file after use!", 'warn');
out("============================================", 'dim');

?>
</div>
</body>
</html>
