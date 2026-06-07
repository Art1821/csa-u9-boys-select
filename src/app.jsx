
import { useState } from "react";

const allWeeks = [

  // WEEK 1
  {
    week: 1, theme: "Introduction & Ball Mastery", focus: "2-3-1 Shape Awareness", color: "#a8e63d",
    sessions: [
      {
        session: 1, title: "MEET THE FORMATION", subtitle: "Understanding 2-3-1 positional roles",
        objectives: { technical: ["Dribbling with both feet","Basic ball mastery moves","Receiving with correct foot"], tactical: ["Understand the 2-3-1 shape","Learn position names","Basic spacing concepts"], physical: ["Coordination","Balance","Body awareness"], mental: ["Enthusiasm","Listening skills","Self-confidence"] },
        vocabulary: [{ word:"Shape", def:"How our team is positioned on the field." },{ word:"Width", def:"Spreading out to use the whole field." },{ word:"Depth", def:"Players positioned at different heights on the field." },{ word:"Triangle", def:"Three players forming a passing option." }],
        activities: [
          { name:"BALL MASTERY CIRCUIT", duration:"10 min", area:"20 x 20", description:"Each player with a ball. Rotate through: toe taps (1 min), sole rolls (1 min), inside-outside (2 min), dribble and stop (2 min), free moves (2 min), show a friend your best move (2 min).", coachingPoints:["Soft touches","Head up between moves","Use both feet equally"], progression:"Add defender as shadow (no tackling)" },
          { name:"FORMATION WALK-THROUGH", duration:"10 min", area:"Full 7v7 field", description:"Place cones at each of the 7 positions. Coach walks players to each cone and explains the role: GK, 2 defenders (L/R), 3 midfielders (L/C/R), 1 striker. Players take turns standing on each position.", coachingPoints:["Every player learns every role","Emphasis on spacing","Show the triangles visually"], progression:"Walk the ball from GK to striker along a path" },
          { name:"1v1 DRIBBLE GATES", duration:"15 min", area:"30 x 20", description:"8 small cone gates scattered around the area. Players dribble and score by passing through gates. Count gates per minute. Then add a defender to shadow.", coachingPoints:["Change of direction","Protect ball with body","Quick touches"], progression:"Gates only count if you look up first before scoring" },
          { name:"SHAPE RONDO 3v1", duration:"15 min", area:"10 x 10", description:"3 attackers hold possession vs 1 defender. 5 consecutive passes = 1 point. Rotate defender every 90 seconds.", coachingPoints:["Triangle spacing","Move after passing","Call for the ball"], progression:"Add second defender — now 3v2" },
          { name:"POSITIONAL SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Every player assigned a position. Every 5 minutes, rotate everyone one position clockwise. Coach freezes play to highlight good spacing.", coachingPoints:["Stay in your zone","Face forward when possible","Find the free player"], freezeMoment:"Pause game. Ask: 'Can everyone see two teammates?' If not, adjust spacing. Show the 2-3-1 triangles." },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open play. Coach encourages players to try everything they learned. Positive reinforcement focus.", coachingPoints:["Enjoy the game","Try new moves","Celebrate effort not just goals"], matchChallenge:["Defenders: Win 2 headers or interceptions","Midfielders: Complete 5 passes in a row","Striker: Score with weaker foot"] },
        ],
        nextWeek:"Session 2 introduces BUILDING FROM THE BACK UNDER PRESSURE. New words: Stretch, Scan, Share, Shake It Off.",
      },
      {
        session: 2, title: "BUILDING FROM THE BACK UNDER PRESSURE", subtitle: "Stay calm when opponents press",
        objectives: { technical:["First touch away from pressure","Passing under pressure","Receiving with proper body shape"], tactical:["Create triangles","Support the player with the ball","Recognize pressure and escape routes"], physical:["Agility","Quick changes of direction","Acceleration"], mental:["Confidence on the ball","Decision making","Composure"] },
        vocabulary: [{ word:"Stretch", def:"Create width and depth." },{ word:"Scan", def:"See the field before receiving." },{ word:"Share", def:"Move the ball quickly." },{ word:"Shake It Off", def:"Mistakes happen. Move on." }],
        activities: [
          { name:"BALL MASTERY & JUGGLING", duration:"10 min", area:"Individual", description:"Round 1: Right foot only (1 min). Round 2: Left foot only (1 min). Round 3: Alternate feet (2 min). Round 4: Juggle and move (3 min). Round 5: Personal record challenge (3 min).", coachingPoints:["Soft touches","Eyes up","Balance"] },
          { name:"AGILITY & REACTION", duration:"10 min", area:"Ladder + cones", description:"Sequence: Agility ladder → Sprint gate → Coach calls color → Player changes direction → Finish with ball. Set up agility ladder, sprint gate, and reaction cones.", coachingPoints:["Quick feet","Low center of gravity","Fast reactions"] },
          { name:"3v1 RONDO", duration:"15 min", area:"10 x 10", description:"3 attackers vs 1 defender. 5 passes = point. Defender wins ball = switch.", coachingPoints:["Scan — look before ball arrives","Share — move ball quickly","Stretch — larger passing angles"], commonErrors:[{ error:"Standing still", fix:'"Can you help your teammate?"' },{ error:"Holding ball too long", fix:'"Pass before pressure arrives."' }], progression:"Two-touch maximum" },
          { name:"4v2 ESCAPE PRESSURE", duration:"20 min", area:"20 x 20", description:"GK + 2 defenders + 1 midfielder vs 2 pressers. Objective: Connect 5 passes OR play through target midfielder.", coachingPoints:["Pressure creates space somewhere else","Switch to weak side","GK as extra player"], freezeMoment:"Show players: Pressure on one side = Space on opposite side. Teach switching play.", keyLesson:"Pressure creates space somewhere else." },
          { name:"BUILD OUT GAME", duration:"15 min", area:"Half field 5v5 + GK", description:"Every restart begins with goalkeeper. Scoring: 1 point for successfully reaching midfield, 2 points for scoring.", coachingPoints:["Can we solve pressure?","Can we play through lines?","Can we find the extra player?"] },
          { name:"SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open scrimmage. Goals worth double if build starts from goalkeeper.", coachingPoints:["Stretch!","Scan!","Share!","Shake It Off!"], matchChallenge:["Defenders: Receive facing forward 3 times","Midfielders: Turn under pressure 3 times","Striker: Create passing lane for build out","Team: Use SCAN at least 20 times"] },
        ],
        nextWeek:"Week 2 introduces DEFENDING AS A TEAM. New words: Squeeze, Compact, Delay, Recover.",
      },
    ],
  },
  // WEEK 2
  {
    week: 2, theme: "Defending as a Unit", focus: "First, Second Defender & Compactness", color: "#f5c518",
    sessions: [
      {
        session: 1, title: "THE FIRST DEFENDER", subtitle: "Pressure, delay, and body position",
        objectives: { technical:["Defensive stance","Jockeying","Forcing play to weaker side"], tactical:["First defender role","Angle of approach","Block passing lanes"], physical:["Defensive footwork","Lateral movement","Sprint recovery"], mental:["Courage to defend","Reading the attacker","Patience"] },
        vocabulary: [{ word:"Squeeze", def:"When we lose the ball, make the field small." },{ word:"Compact", def:"Stay connected as a team." },{ word:"Delay", def:"Slow the attack — don't dive in." },{ word:"Recover", def:"Sprint back immediately after losing ball." }],
        activities: [
          { name:"DEFENSIVE STANCE WARMUP", duration:"10 min", area:"Individual", description:"Coach demonstrates defensive stance. Players mirror coach movements: side-to-side shuffle, backward jog, quick sprint forward. Add ball: coach dribbles slowly, player practices jockeying without tackling.", coachingPoints:["Side-on stance","Weight on balls of feet","Eyes on ball not player's body"] },
          { name:"1v1 DEFENDING GATES", duration:"10 min", area:"20 x 10", description:"Attacker tries to dribble through end-line gate. Defender must delay for 5 seconds before attempting tackle. Rotate roles every 2 minutes.", coachingPoints:["Stay goal-side","Don't lunge","Force attacker to weaker foot"], progression:"Defender earns point for delaying 5 seconds, double point for winning ball" },
          { name:"SHADOW DEFENDING", duration:"15 min", area:"30 x 20", description:"Pairs. One player with ball, one without. Defender stays at arm's length while attacker dribbles freely. No tackling — body position practice only.", coachingPoints:["Mirror the attacker","Don't cross feet","Stay between attacker and goal"] },
          { name:"2v1 DEFENDING SHAPE", duration:"20 min", area:"20 x 20", description:"Two defenders vs one attacker. First defender pressures, second covers. Attacker tries to dribble or pass to cone target on far end.", coachingPoints:["First defender: pressure and delay","Second defender: cover and communicate","Switch roles when ball moves"], keyLesson:"Two defenders working together beats one diving in every time." },
          { name:"DEFENSIVE TRANSITION GAME", duration:"15 min", area:"Half field", description:"4v4. When team loses ball, they must squeeze and get compact before pressing. Coach counts — how fast can they reorganize?", coachingPoints:["Squeeze immediately","Compact shape","Who is first defender?"] },
          { name:"FULL GAME — DEFEND THE LEAD", duration:"20 min", area:"Full field 7v7", description:"One team given 2-0 lead, must defend for 10 minutes. Then switch.", coachingPoints:["Defensive shape holds","First defender pressures every time","Celebrate clean defending loudly"], matchChallenge:["Defenders: Win 3 clean defensive actions","Midfielders: Track runner and recover twice","Striker: Press from front — make defender uncomfortable"] },
        ],
        nextWeek:"Session 2 covers TEAM DEFENSIVE SHAPE — compact blocks and cover shadows.",
      },
      {
        session: 2, title: "TEAM DEFENSIVE SHAPE", subtitle: "Compact block and cover shadows",
        objectives: { technical:["Defensive block positioning","Tracking runners","Winning second balls"], tactical:["Compact defensive shape","Cover shadows","Shifting as a unit"], physical:["Lateral shifting","Quick recovery runs","Defensive endurance"], mental:["Defensive concentration","Team communication","Resilience"] },
        vocabulary: [{ word:"Block", def:"A compact defensive unit that is hard to play through." },{ word:"Cover Shadow", def:"Position your body to block a passing lane." },{ word:"Shift", def:"Move the defensive shape toward the ball." },{ word:"Clean Sheet", def:"A game with zero goals conceded — the defenders' trophy." }],
        activities: [
          { name:"PASSING & MOVEMENT WARMUP", duration:"10 min", area:"20 x 20", description:"Two-touch passing in groups of 4. After every pass, player sprints to a new position. Simulates the shifting movement required in defensive shape.", coachingPoints:["Quick passes","Move after every pass","Communicate before receiving"] },
          { name:"COVER SHADOW DRILL", duration:"10 min", area:"15 x 15", description:"3 attackers pass ball around perimeter. 2 defenders in middle must position their bodies to block passing lanes to the middle cone. No tackling.", coachingPoints:["Body angle blocks passing lane","Move with the ball","Communicate with partner"] },
          { name:"4v4 COMPACT BLOCK", duration:"15 min", area:"30 x 20", description:"Defending team of 4 must stay compact (within 10 yards) while pressuring ball. Attackers try to create and exploit gaps.", coachingPoints:["No gaps bigger than 5 yards","Shift together as ball moves","First defender pressures — others cover"] },
          { name:"ZONAL DEFENDING PRACTICE", duration:"20 min", area:"Half field", description:"Coach assigns each defender a zone. Ball enters zone = that defender is first. Others squeeze and support. Attackers play 5v3.", coachingPoints:["Don't chase ball out of zone","Trust teammates","Call 'mine' for your zone"], freezeMoment:"Freeze and show the shape from behind. 'Look how compact we are. There's no space.' vs 'Look at the gap — that's where they score.'", keyLesson:"Good defending is about shape, not just individual effort." },
          { name:"ATTACK vs DEFENSE", duration:"15 min", area:"Full field 7v7", description:"Coach alternates: 3 minutes attack-focused, 3 minutes defense-focused. Defending team scores by winning ball and playing to target player.", coachingPoints:["Transition speed is key","Immediately squeeze when losing ball","Celebrate defensive wins as loudly as goals"] },
          { name:"CHAMPIONSHIP SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Normal 7v7. Defensive goals (winning ball and retaining 5 passes) worth 2 points. Attacking goals worth 1 point.", coachingPoints:["Defensive awareness is rewarded","Shape, shape, shape","Celebrate the clean sheet effort"], matchChallenge:["All defenders: Achieve 1 clean defensive block each","Midfielders: Win back 2 balls in transition","Team: Squeeze within 3 seconds of losing ball every time"] },
        ],
        nextWeek:"Week 3 introduces SWITCHING PLAY. New concept: finding the free player on the weak side.",
      },
    ],
  },
  // WEEK 3
  {
    week: 3, theme: "Switching Play", focus: "Width, Weak Side & Quick Combinations", color: "#6ec6f0",
    sessions: [
      {
        session: 1, title: "FINDING THE FREE PLAYER", subtitle: "Switch the field — attack the weak side",
        objectives: { technical:["Long passing accuracy","Receiving on the half-turn","First touch to open space"], tactical:["Identify the weak side","Switch play through midfield","Create overloads by switching"], physical:["Passing distance","Running off the ball","Stamina across the width"], mental:["Scanning wide before passing","Vision","Decision speed"] },
        vocabulary: [{ word:"Weak Side", def:"The side of the field without pressure — the free zone." },{ word:"Switch", def:"Move the ball quickly from one side to the other." },{ word:"Open Up", def:"Receive on half-turn to see both sides of the field." },{ word:"Third Man Run", def:"The player not directly involved makes the run that creates the attack." }],
        activities: [
          { name:"PASSING WARMUP — SWITCHING GRID", duration:"10 min", area:"30 x 20", description:"Players in pairs on opposite sides of a wide grid. Pass across to partner. Add two middle relay players. Build from 2-touch to 1-touch across the width.", coachingPoints:["Weight of pass","Receiver's body shape — half-turn","Call for the ball early"] },
          { name:"WEAK SIDE RECOGNITION", duration:"10 min", area:"20 x 20", description:"Coach creates 3v1 on one side. Remaining player stands alone on other side. Players must recognize weak side and switch ball to the open player.", coachingPoints:["Scan before receiving","Quick decision to switch","Receiver must run to meet ball — don't stand still"] },
          { name:"WIDE RONDO 5v2", duration:"15 min", area:"30 x 10", description:"5 players on perimeter of wide rectangle vs 2 defenders inside. Score 1 point if ball travels from left wing to right wing in 3 passes or fewer.", coachingPoints:["Use the width","No unnecessary backward passes","Switch must be crisp — not floating"], commonErrors:[{ error:"Switching slowly — ball hangs in air", fix:"Drive it low and hard. Lofted switches give defenders time." },{ error:"Receiver not ready", fix:'"Move your feet toward the ball — don\'t wait for it."' }] },
          { name:"SWITCHING PRACTICE GAME", duration:"20 min", area:"40 x 30", description:"4v4 plus 2 wide neutral players always on attacking team. Goals only count if wide player was involved in build-up.", coachingPoints:["Find the wide player early","Pull defenders before switching","Wide player receives, combines — doesn't just receive and hold"], keyLesson:"When one side is locked, the other side is open. Find it." },
          { name:"BUILD & SWITCH GAME", duration:"15 min", area:"Full field 7v7", description:"Goals only count if ball switches sides at least once in the attacking move. Coach counts switches aloud.", coachingPoints:["Wide midfielders stay wide","Central midfielder is the pivot","Striker creates space by moving"] },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open play. Coach pauses to celebrate great switches of play.", coachingPoints:["Celebrate the switch, not just the goal","Who created the switch? Acknowledge them.","Look for switches constantly"], matchChallenge:["Every player: Complete 1 switch of play","Midfielders: Be the relay player in 2 switches","Team: Score a goal involving a switch"] },
        ],
        nextWeek:"Session 2 covers COMBINATION PLAY — one-twos, third man runs, and overlaps.",
      },
      {
        session: 2, title: "COMBINATION PLAY", subtitle: "One-twos, overlaps, and third man runs",
        objectives: { technical:["Wall pass (one-two)","Overlap run timing","Third man movement"], tactical:["Create combinations to beat a defender","Time runs with the pass","Overload and exploit"], physical:["Acceleration in combinations","Running angles","Dynamic movement"], mental:["Anticipation","Timing runs without ball","Trust in teammates"] },
        vocabulary: [{ word:"One-Two", def:"Pass and immediately sprint to receive it back." },{ word:"Overlap", def:"A player runs around the outside of their teammate." },{ word:"Underlap", def:"A player cuts through the inside while teammate holds wide." },{ word:"Trigger", def:"The moment your teammate receives the ball is your cue to run." }],
        activities: [
          { name:"ONE-TWO WARMUP", duration:"10 min", area:"20 x 10", description:"Pairs practice wall pass in motion. Player A passes to B, immediately sprints past defender cone, receives return pass into space. Repeat continuously.", coachingPoints:["Pass with correct foot","Sprint immediately after passing","Soft return pass to space — not at feet"] },
          { name:"1v1 + SUPPORT PLAYER", duration:"10 min", area:"15 x 15", description:"1v1 in grid. Third player stands on side as support wall. Attacker must use support player to beat defender via combination.", coachingPoints:["Use support player as wall","Timing of pass is critical — not too early","Support player must give fast return"] },
          { name:"OVERLAP CIRCUITS", duration:"15 min", area:"40 x 20", description:"Winger receives ball near touchline. Fullback or midfielder makes overlap run outside the winger. Winger plays ball into space for overlapping runner. Finish with cross or shot.", coachingPoints:["Trigger: overlap when winger receives ball","Call 'OVER' to communicate","Winger must hold ball until overlapper is clearly past"], progression:"Add passive defender who can only track winger" },
          { name:"COMBINATION ATTACK GAME", duration:"20 min", area:"Half field", description:"4v3 attacking practice. Attackers must use at least one combination before shooting. Goals from combinations count double.", coachingPoints:["Look for one-two opportunity in tight spaces","Third man must read and run at right moment","Don't force it — be patient, then explode"], keyLesson:"The best combination happens when the defender has already committed." },
          { name:"POSITIONAL GAME WITH BONUS", duration:"15 min", area:"Full field 7v7", description:"Normal game. 2 bonus points for goals from a one-two. 1 bonus point for completed overlap.", coachingPoints:["Patience in build-up","Exploit the combination opportunity","Celebrate the assist as loudly as the goal"] },
          { name:"FREE PLAY", duration:"20 min", area:"Full field 7v7", description:"Open scrimmage. Players encouraged to try combinations without fear.", coachingPoints:["Risk-taking in training makes game smarter","Mistakes in combinations are how you learn","High-five your teammates when combinations work"], matchChallenge:["Every forward: Attempt a one-two","Wide midfielders: Complete an overlap run","Team: Score 1 goal from a combination"] },
        ],
        nextWeek:"Week 4 focuses on THE STRIKER'S ROLE — movement, hold-up play, and finishing under pressure.",
      },
    ],
  },
  // WEEK 4
  {
    week: 4, theme: "Striker's Role", focus: "Movement, Hold-Up Play & Finishing", color: "#e84545",
    sessions: [
      {
        session: 1, title: "THE LONE STRIKER", subtitle: "Creating space, holding ball, linking play",
        objectives: { technical:["Hold-up play with back to goal","Layoff passes","Turning in tight spaces"], tactical:["Striker movement patterns","Link with midfielders","Create space for runners"], physical:["Strength in contact","Balance under pressure","Spring and change of direction"], mental:["Patience up front","Reading defenders","Confidence to hold"] },
        vocabulary: [{ word:"Hold Up", def:"Receive the ball and keep possession while teammates arrive." },{ word:"Layoff", def:"A quick pass back to an arriving teammate." },{ word:"Drop Deep", def:"Striker comes toward the ball to help build play." },{ word:"Blind Side", def:"Making a run where the defender cannot see you." }],
        activities: [
          { name:"STRIKER MOVEMENTS WARMUP", duration:"10 min", area:"20 x 10", description:"Pairs. Server plays ball to striker's feet from behind. Striker must: (a) hold, turn and face, (b) lay off and spin, (c) dummy and run. Rotate roles.", coachingPoints:["Strong base when receiving","Shield ball with body","Quick decision after receiving"] },
          { name:"BACK TO GOAL 1v1", duration:"10 min", area:"15 x 10", description:"Striker receives with back to goal, defender pressures from behind. Striker must protect ball for 5 seconds then turn and score by dribbling over end line.", coachingPoints:["Low center of gravity","Use arms legally to feel defender","Protect, then explode into turn"] },
          { name:"2+1 STRIKER LINK", duration:"15 min", area:"30 x 20", description:"2 midfielders + 1 striker vs 1 defender. Midfielders build from back, play into striker who lays off or turns. Finish with shot on mini goal.", coachingPoints:["Striker drops to receive — don't stay static","Layoff must be first-touch perfect","Midfielders make runs AFTER playing into striker"], commonErrors:[{ error:"Striker stands too far away", fix:"Drop closer. Make it easy for the pass to arrive." },{ error:"Layoff too soft or inaccurate", fix:'"One touch, firm, into your teammate\'s stride."' }] },
          { name:"STRIKER SCORING GAME", duration:"20 min", area:"Half field", description:"4v4 plus dedicated striker. Points: 1 for hold and layoff, 2 for goal after layoff, 3 for solo turn and goal.", coachingPoints:["Striker — keep moving constantly","Anticipate the second ball","Don't stand static"], keyLesson:"A good striker makes everyone else better — not just by scoring but by linking." },
          { name:"LINK PLAY GAME", duration:"15 min", area:"Full field 7v7", description:"Team earns bonus point every time striker successfully links with midfielder and move continues forward.", coachingPoints:["Striker constantly offers","Midfielder trusts striker to lay off","Follow your pass — always"] },
          { name:"SCRIMMAGE — STRIKER ROTATION", duration:"20 min", area:"Full field 7v7", description:"Rotate who plays striker every 5 minutes. Every player must experience the striker role.", coachingPoints:["Appreciate the striker's job","Each player: one hold-up, one layoff as striker","Celebrate when striker links well"], matchChallenge:["Each striker stint: Complete 1 hold-up and layoff","Midfielders: Support striker within 3 seconds","Team: Score 1 goal from a striker link"] },
        ],
        nextWeek:"Session 2 covers FINISHING — shooting techniques, composure, and angles.",
      },
      {
        session: 2, title: "FINISHING & COMPOSURE", subtitle: "Shooting technique and clinical finishing",
        objectives: { technical:["Instep drive","Side-foot finish","Volleying basics","First-time shooting"], tactical:["Shoot when to shoot","Create angles for shot","Follow up for rebounds"], physical:["Strike technique","Leg swing mechanics","Balance while shooting"], mental:["Composure in front of goal","Positive shooting mentality","Bounce back from misses"] },
        vocabulary: [{ word:"Composure", def:"Staying calm when it's the moment to score." },{ word:"Near Post", def:"The post closest to where the ball is coming from." },{ word:"Far Post", def:"The post furthest from where the ball is." },{ word:"Follow Up", def:"Sprint after your shot in case it rebounds off the goalkeeper." }],
        activities: [
          { name:"SHOOTING TECHNIQUE CLINIC", duration:"10 min", area:"Goal + 15 yards", description:"Three stations — rotate every 3 minutes: (1) Side-foot accuracy at target cones, (2) Instep drive from 12 yards, (3) Weak foot finishing. No goalkeeper yet.", coachingPoints:["Plant foot beside ball","Strike through middle of ball","Follow through toward target"] },
          { name:"GOALKEEPER GAME — FIRST TIME SHOTS", duration:"10 min", area:"Goal box", description:"Server plays ball across. Player must shoot first-time. Goalkeeper included. Focus on technique not power.", coachingPoints:["Get into line of ball early","Decision: near or far post?","Celebrate both goals AND good technique"] },
          { name:"FINISHING CIRCUIT", duration:"15 min", area:"Penalty area", description:"Four cones at different angles. Players rotate through: right foot cutback, left foot cutback, cross from right, cross from left.", coachingPoints:["Different technique for each angle","Communicate with server","Rebound position — always send runner to far post"], commonErrors:[{ error:"Shooting at goalkeeper center", fix:"Pick a corner. Side-foot to corner." },{ error:"Over-hitting with power, losing accuracy", fix:'"Accuracy first. Power comes later. Hit the target."' }] },
          { name:"SMALL-SIDED SHOOTING GAME", duration:"20 min", area:"30 x 20 + 2 goals", description:"3v3 no goalkeepers. Goals from outside penalty area = 2 points. Goals from first-time shots = 2 points.", coachingPoints:["Shoot on sight","No over-dribbling in shooting positions","Partners always in rebound positions"], keyLesson:"Missing is fine. Not shooting when you should have is not fine." },
          { name:"ATTACK vs GK GAME", duration:"15 min", area:"Half field", description:"5 attackers vs 1 GK + 2 defenders. Combine and create shooting opportunities within 20 seconds.", coachingPoints:["Take shot as soon as clear chance appears","Move quickly to create opportunity","Always follow up"] },
          { name:"FULL GAME — GOLDEN BOOT", duration:"20 min", area:"Full field 7v7", description:"Normal game. Count shots on target — most shots on target wins the Golden Boot.", coachingPoints:["Take the shot when it's on","We reward effort and bravery, not just goals","Celebrate every shot on target"], matchChallenge:["Every player: Take at least 1 shot on target","Strikers: Score 1 goal","Team: Create 6 shots on target total"] },
        ],
        nextWeek:"Week 5 covers GOALKEEPER INTEGRATION — GK as the 8th player in the build-up.",
      },
    ],
  },
  // WEEK 5
  {
    week: 5, theme: "Goalkeeper Integration", focus: "GK as the 8th Player in Build-Up", color: "#f5a623",
    sessions: [
      {
        session: 1, title: "THE GOALKEEPER BUILDS", subtitle: "Distribution, positioning, and communication",
        objectives: { technical:["GK distribution: rolls, throws, kicks","Positioning to receive back passes","Handling crossed balls"], tactical:["GK as extra outfield player","GK positioning for back passes","Quick restart through GK"], physical:["GK footwork","Quick hands","Goal kicks with technique"], mental:["GK leadership and communication","Confidence to receive under pressure","Organize defense from behind"] },
        vocabulary: [{ word:"Keeper Ball", def:"Call for the goalkeeper to keep possession safely." },{ word:"Step Out", def:"Goalkeeper comes off line to help teammates." },{ word:"Restart", def:"GK quickly restarts play to beat opponent's press." },{ word:"Sweeper Keeper", def:"GK who acts as last defender outside the box." }],
        activities: [
          { name:"GK DISTRIBUTION WARMUP", duration:"10 min", area:"Penalty area", description:"GK practices: rolling to feet of moving player, underarm throw to target, overarm throw for distance, driven goal kick to feet. Each outfield player takes a turn receiving each type.", coachingPoints:["Accuracy before distance","Low distributions stay on ground","Receiver must call and show hand as target"] },
          { name:"GK POSITIONING GAME", duration:"10 min", area:"Full field", description:"Walk-through: as ball moves around the field, GK walks to correct position. Ball on left = GK moves left of center. Ball central = GK narrows angle.", coachingPoints:["GK always ready for back pass","Angle narrows shooting lane","Communicate with defenders constantly"], freezeMoment:"Stop walk-through. 'If they shot now, what's the angle? What if GK was here instead?'" },
          { name:"BACK PASS PRACTICE", duration:"15 min", area:"Half field", description:"4v2. Outfield team passes and back-passes to GK who redistributes. Defenders press. GK must solve press quickly — don't hold more than 2 seconds.", coachingPoints:["GK calls 'keeper' to invite back pass","First touch sets up distribution","Quick — don't let press arrive"] },
          { name:"GK BUILD-OUT GAME", duration:"20 min", area:"Full field", description:"All restarts begin with GK distribution. Bonus point if GK's distribution leads directly to scoring chance within 3 passes.", coachingPoints:["GK chooses: roll, throw, or kick","Players make runs to give GK options","Call for the ball to help GK decide"], keyLesson:"A confident goalkeeper makes everyone in front of them calmer." },
          { name:"PRESSURE RESTART GAME", duration:"15 min", area:"Full field 7v7", description:"After every goal kick, opposing team presses aggressively with 3 players. GK must distribute under pressure.", coachingPoints:["Two short options + one long option always available","Timing of runs is critical","GK takes responsibility for the decision"] },
          { name:"FULL SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Normal game. After every goal conceded, coach pauses and asks GK: 'What could we do differently next restart?'", coachingPoints:["GK ownership of distribution decisions","Positive reinforcement of brave GK decisions","Celebrate the assists GKs create"], matchChallenge:["GK: Make 3 clean distributions under pressure","Defenders: Give GK a back pass option 3 times","Team: Score from a GK distribution once"] },
        ],
        nextWeek:"Session 2 introduces GK COMMUNICATION AND SHOT STOPPING under the 2-3-1 shape.",
      },
      {
        session: 2, title: "GK COMMUNICATION & SHOT STOPPING", subtitle: "Organizing the defense and handling pressure",
        objectives: { technical:["Basic shot stopping technique","Diving saves low and high","Handling crosses in box"], tactical:["GK organizes defensive wall","Communicating with defenders","When to come for crosses"], physical:["Goalkeeper dive technique","Reaction saves","Safe landing technique"], mental:["GK confidence","Recover from goal conceded","Leadership under pressure"] },
        vocabulary: [{ word:"Set", def:"GK gets ready position — balanced, on toes." },{ word:"Narrow", def:"GK moves to narrow the angle for the shooter." },{ word:"Away", def:"GK calls 'away' to claim a ball they are going to collect." },{ word:"Man On", def:"GK warns teammate that a defender is approaching." }],
        activities: [
          { name:"SHOT STOPPING TECHNIQUE", duration:"10 min", area:"Goal", description:"Three rounds: (a) rolling shots — GK drops to side, (b) driven shots — GK catches or parries, (c) reaction saves — server holds ball, GK resets, random serve.", coachingPoints:["Set position before every serve","Catch if possible, parry to safety if not","Get up quickly after every save"] },
          { name:"ANGLE NARROWING", duration:"10 min", area:"Penalty area", description:"Attacker placed at different positions. GK moves to correct position to narrow angle. No shot yet — just positioning. Then add shots.", coachingPoints:["Come off line but not too far for U9","Center of goal is not always best position","Watch ball not attacker's eyes"] },
          { name:"GK COMMUNICATION DRILL", duration:"15 min", area:"Full field", description:"Two teams play quietly — no talking allowed except the GK. GK must organize defense by calling: 'SQUEEZE', 'PRESS', 'MAN ON', 'AWAY'. Outfield players follow GK commands.", coachingPoints:["Clear loud calls","Use specific player names when possible","Positive tone even under pressure"], commonErrors:[{ error:"GK silent when teammates need help", fix:"Freeze game. 'GK — what do you see? Tell them.' Restart." },{ error:"GK calls but no one responds", fix:"Team must respond to GK. 'One voice from behind — trust it.'" }] },
          { name:"CROSSES GAME", duration:"20 min", area:"Penalty area", description:"Wide servers deliver crosses. GK decides: come for cross or stay. 2 defenders + 2 attackers in box. GK calling 'AWAY' clearly = authority to claim.", coachingPoints:["Call early and loudly","Strong hands through the ball","If unsure — stay on line and adjust"], keyLesson:"A goalkeeper who communicates well organizes the whole team." },
          { name:"PRESSURE SCENARIO GAME", duration:"15 min", area:"Full field 7v7", description:"Attacking team gets 3v2 overloads frequently to test GK decision-making under pressure.", coachingPoints:["GK never hides — always communicating","Trust your positioning and angles","React to deflections and second balls"] },
          { name:"CHAMPIONSHIP GAME — GOLDEN GLOVES", duration:"20 min", area:"Full field 7v7", description:"Full scrimmage. GK earns Golden Gloves award for best communication and decision-making. Players vote at end.", coachingPoints:["Players observe: who helped GK the most?","GK: Be the team's organizer","Team: Protect your GK — they protect you"], matchChallenge:["GK: 5 vocal commands during game","Defenders: Respond to every GK command","Team: Zero goals from poor GK-defender communication"] },
        ],
        nextWeek:"Week 6 introduces SET PIECES — corner kicks, free kicks, and throw-ins in the 2-3-1.",
      },
    ],
  },

  // WEEK 6
  {
    week: 6, theme: "Set Pieces", focus: "Corners, Free Kicks & Throw-Ins", color: "#9b59b6",
    sessions: [
      {
        session: 1, title: "CORNER KICK ROUTINES", subtitle: "Attacking and defending corners",
        objectives: { technical:["Corner kick delivery technique","Near post flick-on","Clearing headers"], tactical:["Attacking corner assignments","Defensive corner organization","GK command on corners"], physical:["Timing of runs","Jumping for headers","Positioning in box"], mental:["Set piece concentration","Follow instructions under pressure","Anticipation"] },
        vocabulary: [{ word:"Near Post Run", def:"Run to the near post to flick or redirect." },{ word:"Far Post Run", def:"Run to far post for headed chance." },{ word:"Blocking Runner", def:"Player who screens the goalkeeper's view." },{ word:"Short Corner", def:"Pass to nearby player to create a better angle." }],
        activities: [
          { name:"CORNER DELIVERY WARMUP", duration:"10 min", area:"Penalty area", description:"No defenders. Each player takes 3 corners — in-swinger, out-swinger, short corner to feet. Teammates practice making runs to near post, far post, and edge of box.", coachingPoints:["Ball must be whipped in, not floated slowly","Near post runner: time run to arrive as ball arrives","Far post runner: anticipate overshoot"] },
          { name:"ATTACKING CORNER ROUTINE A", duration:"10 min", area:"Penalty area", description:"Assign roles: Taker, Near Post Runner (forward), Far Post Runner (midfielder), Edge of Box Player (receives cleared ball). Walk through slowly, then at game speed.", coachingPoints:["Taker: signal with hand before delivery","Runners: start from outside box — build momentum","Edge player: be ready for second ball"], progression:"Add 2 passive defenders" },
          { name:"DEFENDING CORNERS", duration:"15 min", area:"Penalty area", description:"Each outfield defender assigned a zone. GK commands box. Practice: corner comes in, defenders must win first ball or clear second. 3 corners attacked, 3 defended.", coachingPoints:["Mark at arm's length, goal-side","GK calls 'AWAY' — everyone clears space","Clear ball high, wide, and far — not across goal"], commonErrors:[{ error:"Defender watching ball not runner", fix:"Ball first, then player. 'See ball, see man.'" },{ error:"Clearing across goal mouth", fix:'"Never across the face of goal. Punch it wide."' }] },
          { name:"CORNER GAME", duration:"20 min", area:"Full field", description:"Every foul or out-of-play earns a corner kick. Creates multiple corner situations to practice in game context.", coachingPoints:["Execute the routine","Everyone knows their role","Defender: who are you marking?"], keyLesson:"Set pieces are free opportunities. Prepare for them like plays in a playbook." },
          { name:"SHORT CORNER COMBINATION", duration:"15 min", area:"Corner arc + penalty area", description:"Short corner: taker passes to nearby teammate, creates angle, then delivers cross from a better position with runners in box.", coachingPoints:["Short corner = better angle = better cross","Timing of box runs must match the second delivery","Defenders must track the new cross direction"] },
          { name:"FULL GAME", duration:"20 min", area:"Full field 7v7", description:"Normal game. Coach awards corners frequently. After each corner, brief 20-second feedback.", coachingPoints:["Execute under game conditions","Communication is key","Celebrate corners won"], matchChallenge:["Score from a corner","Defenders: Win every corner defensively with clean header","GK: Command box on 2 corner kicks"] },
        ],
        nextWeek:"Session 2 covers FREE KICKS and THROW-INS in the 2-3-1.",
      },
      {
        session: 2, title: "FREE KICKS & THROW-INS", subtitle: "Dead ball situations in our favor",
        objectives: { technical:["Free kick technique — driven and chipped","Long throw-in technique","Receiving throw-ins under pressure"], tactical:["Free kick positioning and wall","Throw-in routines","Quick restarts to beat press"], physical:["Kicking technique for free kicks","Throw-in arm technique","Support positioning"], mental:["Set piece decision-making","Quick restart mentality","Taking responsibility for dead balls"] },
        vocabulary: [{ word:"Wall", def:"Defending players forming a barrier at free kicks." },{ word:"Chip", def:"Kicking over the top of the wall with backspin." },{ word:"Drive", def:"Low powerful strike through a gap in the wall." },{ word:"Quick Restart", def:"Taking a set piece immediately before opponents organize." }],
        activities: [
          { name:"FREE KICK TECHNIQUE", duration:"10 min", area:"Various distances", description:"Station 1: Drive from 18 yards — low and hard. Station 2: Chip from 20 yards — over wall and dip. Station 3: Lay off for runner — pass to side, runner shoots. Rotate every 3 minutes.", coachingPoints:["Non-kicking foot placement","Strike through the ball cleanly","Pick your target before approaching"] },
          { name:"WALL BUILDING — DEFENDING FREE KICKS", duration:"10 min", area:"Various positions", description:"Defensive team builds wall: 2 players in wall positioned on near post by GK, others mark runners. Take 5 free kicks — measure how many goals conceded.", coachingPoints:["Wall on near post — GK covers far","Hands down in front, not up","Leave when ball is struck — don't hide in wall"], progression:"Add decoy runner around wall as ball is struck" },
          { name:"THROW-IN ROUTINES", duration:"15 min", area:"Touchline", description:"Three throw-in routines: (a) Short — throw to feet, lay off, combine back, (b) Long — over head of defender to running striker, (c) Quick — throw immediately before defenders set. Practice each 3 times.", coachingPoints:["Feet must stay on ground for legal throw","Make run before throw — not after","Receiver: move toward thrower, don't wait"], commonErrors:[{ error:"Receiver standing still", fix:"Check away first, then check toward. Create separation." },{ error:"Slow throw-in — opposition organizes", fix:'"Look up. If they\'re not set — throw immediately."' }] },
          { name:"SET PIECE MATCH", duration:"20 min", area:"Full field 7v7", description:"Every foul results in a free kick. Teams must execute all set piece types practiced. Count set piece goals or chances created.", coachingPoints:["Which set piece is this? Who's taking it?","Everyone knows their role","Quick restart option always available"], keyLesson:"A team that takes set pieces seriously gets 30% more opportunities per game." },
          { name:"QUICK RESTART GAME", duration:"15 min", area:"Full field 7v7", description:"Any restart taken within 5 seconds of ball going out scores double. Forces quick thinking on throw-ins, goal kicks, and free kicks.", coachingPoints:["Eyes up immediately after ball out","Throw/kick quickly — catch them off guard","Runner must be alert at all times"] },
          { name:"CHAMPIONSHIP SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Normal 7v7. Apply all set pieces learned this week.", coachingPoints:["Execution under pressure","Reward set piece goals with extra praise","Players call their own set piece routines"], matchChallenge:["Score from a set piece","Defend a corner or free kick cleanly","Execute a quick restart to create a chance"] },
        ],
        nextWeek:"Week 7 introduces COUNTER-ATTACKING — speed in transition and attacking fast.",
      },
    ],
  },
  // WEEK 7
  {
    week: 7, theme: "Counter-Attacking", focus: "Speed in Transition — Attack Fast", color: "#e74c3c",
    sessions: [
      {
        session: 1, title: "FAST BREAK ATTACK", subtitle: "Exploit space behind the defense",
        objectives: { technical:["First pass after winning ball","Running with ball at pace","Finishing on the counter"], tactical:["Identify counter-attack trigger","Vertical runs behind defense","3v2 counter-attack execution"], physical:["Sprint speed","Explosive first step","Running with ball at speed"], mental:["Quick decision after winning ball","Confidence to run at defenders","Composure in fast situations"] },
        vocabulary: [{ word:"Counter", def:"Attack immediately after winning the ball." },{ word:"Vertical", def:"Play forward quickly — not sideways or backward." },{ word:"Transition", def:"The moment between defending and attacking." },{ word:"Sprint Lane", def:"The channel a forward sprints into on a counter." }],
        activities: [
          { name:"TRANSITION WARMUP", duration:"10 min", area:"30 x 20", description:"4v2 possession. When defender wins ball, immediately attacks the other end with 1-2 touches maximum. Counter goal within 5 seconds counts double. Continuous play.", coachingPoints:["Win ball — look up immediately","First pass must be forward","Sprint into space before the pass"] },
          { name:"3v2 COUNTER DRILL", duration:"10 min", area:"Full length 20 wide", description:"3 attackers vs 2 defenders. Attackers start 10 yards behind defenders. On coach's signal, 3v2 counter on full goal with GK. Must score within 8 seconds.", coachingPoints:["Central player decides: carry or pass","Wide runners stretch the 2 defenders","Shoot early — don't over-dribble"], commonErrors:[{ error:"Too many touches — defenders recover", fix:'"2 touches maximum. Win it, play it, run."' },{ error:"All 3 attackers bunch together", fix:"Stretch! Width on the counter creates the 3v2." }] },
          { name:"COUNTER-ATTACK GAME", duration:"15 min", area:"Full field", description:"5v5 + GK. When team wins ball in own half, they have 8 seconds to shoot on goal. After 8 seconds no goal — possession resets.", coachingPoints:["Quick decisions","First pass forward, always","Striker must already be running"], progression:"Reduce time limit to 6 seconds" },
          { name:"DEFEND AND COUNTER", duration:"20 min", area:"Full field 7v7", description:"One team defends 6v4 overload. If defending team wins ball, they immediately counter 4v3. Repeat 6 times then switch.", coachingPoints:["Defending team: be alert — you ARE the counter team","First player to win ball: head up immediately","Release pass must be perfect"], keyLesson:"The best counter-attack starts from a disciplined defensive shape." },
          { name:"WINNER STAYS ON COUNTER", duration:"15 min", area:"Half field 2 goals", description:"3v3. Winning team defends. Losing team exits, new team enters from opposite end to counter-attack winner immediately.", coachingPoints:["Never switch off — new counter starts immediately","Quick recovery when team scores","Transitions both ways"] },
          { name:"FULL SCRIMMAGE — COUNTER BONUS", duration:"20 min", area:"Full field 7v7", description:"Normal game. Goal scored within 6 seconds of winning ball = 3 points. Normal goal = 1 point.", coachingPoints:["Watch for counter opportunities","First pass after winning ball is most important","Celebrate counter-attack goals with maximum energy"], matchChallenge:["Score a counter-attack goal worth 3 points","Every player: Sprint forward on counter at least once","Team: Create 3 counter-attack opportunities"] },
        ],
        nextWeek:"Session 2 covers COUNTER-ATTACK SHAPE — how the 2-3-1 transitions into attack.",
      },
      {
        session: 2, title: "COUNTER-ATTACK SHAPE", subtitle: "Transition from defense to attack in seconds",
        objectives: { technical:["Release pass under pressure","Carrying ball at pace","Finishing from counter positions"], tactical:["Counter positions in 2-3-1","Which player carries vs which runs?","When to hold vs when to release"], physical:["High-speed decision-making","Sprint mechanics with ball","Recovery after counter"], mental:["Restraint when counter isn't on","Composure at speed","Team unity in transitions"] },
        vocabulary: [{ word:"3v2 Situation", def:"Three attackers vs two defenders — exploit immediately." },{ word:"Restraint", def:"Don't lose ball carelessly — be smart." },{ word:"Release Pass", def:"First pass after winning ball — must be perfect." },{ word:"Convert", def:"Turn the counter-attack opportunity into a goal." }],
        activities: [
          { name:"POSITION-SPECIFIC COUNTER WARMUP", duration:"10 min", area:"Full field", description:"Walk through: where does each player go when team wins ball? GK distributes quickly. Defenders drive forward or hold. Midfielders release early. Striker runs behind. Slow walk first, then jog speed.", coachingPoints:["Every player has a counter role","Know who runs, who holds, who distributes","Practice the movement without ball first"] },
          { name:"DEFENDER DRIVING FORWARD", duration:"10 min", area:"Full field half", description:"Defender wins ball in own box, drives forward 20 yards carrying ball, plays into midfielder who releases striker in behind. Finish with shot.", coachingPoints:["Defender: when it's clear — carry, don't pass backward","Midfielder: show for ball at right moment","Striker: start run when defender starts carrying"] },
          { name:"WHEN TO HOLD THE COUNTER", duration:"15 min", area:"Full field 7v7", description:"Coach calls 'counter' or 'hold' as team wins ball. On 'counter' — attack fast. On 'hold' — recycle and build patiently. Players must switch mode instantly.", coachingPoints:["'Counter' = heads up, play vertical","'Hold' = slow down, be safe","Read the situation"], freezeMoment:"Freeze when team wins ball. Count how many opponents are behind the ball. 'If 4 behind the ball, counter. If 7, hold.'" },
          { name:"COUNTER vs ORGANIZED DEFENSE", duration:"20 min", area:"Full field 7v7", description:"Defending team quickly organizes back 4 after winning ball. Attacking team has 6 seconds to counter before defense is set. Then game continues normally.", coachingPoints:["Speed of counter beats organized defense","Patience needed when counter window closes","Don't force a counter that isn't there"], keyLesson:"Every counter has a window. Open — attack. Closed — be patient." },
          { name:"2-3-1 TRANSITION PRACTICE", duration:"15 min", area:"Full field 7v7", description:"Focus on 2-3-1 transitioning: when we lose the ball, how do we set up? When we win it, which 3 players go forward? Practice the transition shape 6 times.", coachingPoints:["Midfield 3 pushes up on counter","Striker holds deep line or runs behind — communicate","Two defenders ALWAYS hold — no matter what"] },
          { name:"CHAMPIONSHIP SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Normal game. Apply counter principles learned all week.", coachingPoints:["Players apply without instruction","Week 7 mastery check","Celebrate intelligent decisions in transition"], matchChallenge:["Every player: Make one forward run on the counter","Team: Score from a counter-attack","Defenders: Hold your position on 1 counter and don't push up"] },
        ],
        nextWeek:"Week 8 introduces PLAYING OUT OF A HIGH PRESS — composure and escape routes.",
      },
    ],
  },
  // WEEK 8
  {
    week: 8, theme: "Playing Out of a High Press", focus: "Composure When Pressed High", color: "#1abc9c",
    sessions: [
      {
        session: 1, title: "ESCAPE THE HIGH PRESS", subtitle: "Third man movements and long options",
        objectives: { technical:["First touch under extreme pressure","Quick combination to bypass press","Long ball option as alternative"], tactical:["Recognize high press","Third man movements","Press-breaking pass patterns"], physical:["Explosive movement away from pressure","Speed off the ball","Sustained effort under press"], mental:["Composure when pressed","Don't panic — execute","Trust teammates to support"] },
        vocabulary: [{ word:"Third Man", def:"Player who receives after a combination bypasses the press." },{ word:"Long Ball Option", def:"If press wins everywhere, play long — skip the pressure." },{ word:"Drop Zone", def:"Safe position to drop into and receive under less pressure." },{ word:"Press Bait", def:"Draw in defenders, then play quickly away from them." }],
        activities: [
          { name:"PRESS WARMUP", duration:"10 min", area:"20 x 20", description:"4v4. One team presses aggressively. Other team must keep possession for 10 passes. Count successful sets of 10 per minute. Rotate press team every 90 seconds.", coachingPoints:["Move quickly under press","Short combination — then release to third man","Head up to find the free player"] },
          { name:"THIRD MAN COMBINATION", duration:"10 min", area:"30 x 20", description:"Player A passes to Player B. B is immediately pressed by defender. B passes quickly to Player C (third man) who has time and space. C drives forward.", coachingPoints:["B must be quick — no time to think","C must move to receive — don't stand still","A must read and make another run"], progression:"Add second defender who presses C" },
          { name:"PRESS TRAP ESCAPE", duration:"15 min", area:"Half field", description:"Defending team presses with 3 in opponent's third. Attacking team of 5 must play out in fewer than 5 passes and reach the other half. Each success = 1 point.", coachingPoints:["Quick combination near goal","Use GK to bypass first press line","Long ball is always available — don't fear it"], commonErrors:[{ error:"Passing back to GK with press already set", fix:"GK must be shouting options. If GK receives, press gets closer." },{ error:"Long ball too early when combination available", fix:"Look for short option first. Long ball is the backup." }] },
          { name:"HIGH PRESS SURVIVAL GAME", duration:"20 min", area:"Full field 7v7", description:"One team presses from the first pass after a goal kick. Other team must reach midfield to earn a point, plus a goal = 2 points. Switch roles every 5 minutes.", coachingPoints:["GK starts — communicate","Defenders must offer angles immediately","Midfielder drops deep to create extra option"], keyLesson:"A well-organized team playing out from the back BEATS the press more than it loses to it." },
          { name:"SLOW PRESS vs FAST PRESS", duration:"15 min", area:"Full field 7v7", description:"Coach signals press speed: high-five above head = high press, arm low = slow press. Pressing team responds instantly. Other team reads and adjusts.", coachingPoints:["Read the press early","Different response to slow and fast press","Early decision wins every time"] },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open play. Coach encourages brave play under pressure.", coachingPoints:["Celebrate players who receive and turn under press","Never criticize a loss of possession when player was brave","Applaud composure under pressure"], matchChallenge:["Every player: Receive and play under press successfully twice","Team: Play out of press 5 times this game","Defenders: Never kick long unless it's the only option"] },
        ],
        nextWeek:"Session 2 covers BUILDING UNDER EXTREME PRESSURE — when to play and when to go long.",
      },
      {
        session: 2, title: "BUILD UNDER EXTREME PRESSURE", subtitle: "Stay calm — find the right pass",
        objectives: { technical:["Decision between short and long pass","One-touch play under press","GK footwork under extreme pressure"], tactical:["Press-breaking structure in 2-3-1","When to go long vs short","Creating 2v1 to escape press"], physical:["Movement quality under fatigue","Explosive repositioning","Sustained press resistance"], mental:["Team calmness under chaos","Trust the system","Concentration for full press"] },
        vocabulary: [{ word:"Chaos Ball", def:"Opposing press creates uncertainty — stay calm and execute." },{ word:"Safe Pass", def:"The right pass even if it's backward." },{ word:"Two Seconds", def:"You have 2 seconds maximum before pressure arrives." },{ word:"Breathe", def:"Stay relaxed — pressure only hurts panicked players." }],
        activities: [
          { name:"REVISIT SESSION 1 WARMUP", duration:"10 min", area:"20 x 20", description:"Quick revisit: third man combination drill from Session 1. Faster this time. Coach adds time pressure by counting aloud.", coachingPoints:["Recall last session","Faster execution today","Anticipate the third man run"] },
          { name:"CHOOSE YOUR PASS", duration:"10 min", area:"Half field", description:"Pair of defenders with GK vs 2 pressers. Multiple options available: short pass, switch, or long ball. Pressers try to win ball. Defending trio must choose best option.", coachingPoints:["Read the press before ball arrives","Best option is not always easiest","Communicate the option clearly"], commonErrors:[{ error:"Picking wrong option under pressure", fix:"Freeze and ask: 'What options did you have? Which was safest?'" },{ error:"No communication — everyone confused", fix:"Before every build — 3 players must be talking. Always." }] },
          { name:"6v4 BUILD OUT", duration:"15 min", area:"Full field", description:"6 attackers (including GK) vs 4 pressers. Attackers must play out and reach far end. No long balls allowed. Coach removes players from defending side one by one.", coachingPoints:["Even in tight situations, solutions exist","GK is always an option","Middle third is the hardest — don't stop there"] },
          { name:"PRESS SCENARIOS", duration:"20 min", area:"Full field 7v7", description:"Coach calls out scenarios: 'Corner kick — high press is on.' 'Goal kick — press coming.' 'You just conceded — they're pressing high.' Team must respond correctly.", coachingPoints:["Game awareness — when are we most vulnerable?","Standard responses to standard situations","Every scenario has been practiced — trust it"], keyLesson:"Great teams have solutions before problems arrive." },
          { name:"PRESS RESISTANCE TOURNAMENT", duration:"15 min", area:"Full field", description:"3 teams. 2 play, 1 presses aggressively. Possession team earns points by playing out. Pressing team earns points by winning ball. Rotate every 3 minutes.", coachingPoints:["Competitive intensity","Pressing team earns their chance by working hard","Possession team: quality over speed"] },
          { name:"WEEK CLOSE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Normal 7v7. Both weeks 7 and 8 applied together — counter when available, build patiently when press is organized.", coachingPoints:["Read the situation","Counter or build — you decide","Trust the work from these 2 weeks"], matchChallenge:["Team: Show 3 examples of playing out under press","Team: Show 2 examples of a counter-attack","Coach challenge: Surprise us with your game intelligence"] },
        ],
        nextWeek:"Week 9 introduces MIDFIELD DOMINANCE — controlling the game through the middle three.",
      },
    ],
  },
  // WEEK 9
  {
    week: 9, theme: "Midfield Dominance", focus: "Controlling the Game Through the Center", color: "#3498db",
    sessions: [
      {
        session: 1, title: "THE MIDFIELD TRIANGLE", subtitle: "Control the game through the middle three",
        objectives: { technical:["One and two-touch passing in tight spaces","Turning with ball under pressure","Body shape to receive in midfield"], tactical:["Midfield triangle positions","When to press vs when to hold shape","Supporting the ball in central areas"], physical:["Endurance for repeated sprinting","Strength in 50/50 challenges","Quick directional changes"], mental:["Reading the game from the center","Decision making under constant pressure","Leadership in midfield"] },
        vocabulary: [{ word:"Pivot", def:"Central midfielder who connects defense and attack." },{ word:"Box to Box", def:"Midfielder who works the entire length of the field." },{ word:"Press Trigger", def:"A signal that tells midfield to press immediately." },{ word:"Recycle", def:"Pass ball back to restart an attack from a safer position." }],
        activities: [
          { name:"MIDFIELD TRIANGLE WARMUP", duration:"10 min", area:"20 x 20", description:"3 midfielders only. Pass and move continuously in triangle. Rotate positions — left, center, right. Target: 20 consecutive passes without losing ball.", coachingPoints:["Body shape — half-turn always","Pass into space not to feet when moving","Call for the ball early"] },
          { name:"DIAMOND POSSESSION", duration:"10 min", area:"20 x 20", description:"4v1 diamond shape. Constant movement. No player stays in same position for more than 2 passes. Central player under constant pressure.", coachingPoints:["Stay connected","Central player: pivot quickly after receiving","Outside players: always offer angle for central player"] },
          { name:"CENTRAL MIDFIELD 3v3", duration:"15 min", area:"30 x 15 central strip", description:"3v3 in central strip only. Wide players not involved. Team that completes 10 passes in a row earns point.", coachingPoints:["Tight space — quality touches essential","Win the tackle, then immediately transition to possession","Help each other when not on ball"], commonErrors:[{ error:"Ball played wide out of central zone", fix:"Stay in the channel. Dominate the center first." },{ error:"Playing too direct — bypassing central control", fix:'"Build through the center. Make them take it from you."' }] },
          { name:"MIDFIELD DOMINANCE GAME", duration:"20 min", area:"Full field 7v7", description:"Goals only count if all 3 midfielders touched ball during the attack.", coachingPoints:["Midfield: always available to receive","Forwards and defenders: always look for midfielders","Midfield: turn pressure into opportunity"], keyLesson:"The team that controls midfield controls the game." },
          { name:"MIDFIELD PRESS TRIGGER GAME", duration:"15 min", area:"Full field 7v7", description:"Coach calls press triggers: 'Long ball!', 'GK has it!', 'Back pass!'. On trigger, midfield immediately presses together.", coachingPoints:["All 3 midfielders press — not just one","Press together — leave no gaps","If you miss trigger — opponent escapes easily"] },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open game. Highlight midfield moments — good and bad.", coachingPoints:["Identify midfield heroes this session","Who controlled the game?","Celebrate central play"], matchChallenge:["Midfielders: Each complete 8 successful passes","Team: Score a goal where all 3 midfielders touched ball","Central mid: Complete 2 turns under pressure"] },
        ],
        nextWeek:"Session 2 covers CENTRAL POSSESSION — dominating the center circle area.",
      },
      {
        session: 2, title: "CENTRAL POSSESSION", subtitle: "Dominate the center circle area",
        objectives: { technical:["Short passing combinations in center circle","Shield and protect ball centrally","Playing out of pressure quickly"], tactical:["Win and keep possession in center","Draw opponents to center then switch","Central control as platform for attack"], physical:["Core strength for midfield battles","Quick feet in close quarters","Movement without ball in central areas"], mental:["Patience in central possession","Confidence under physical pressure","Composure when outnumbered"] },
        vocabulary: [{ word:"Center Control", def:"Owning the central zone gives us platform for all attacks." },{ word:"Draw and Switch", def:"Pull defenders to center — then attack the wide space." },{ word:"Dictate", def:"Control the pace and direction of the game." },{ word:"Shield", def:"Protect the ball with your body — keep defenders behind." }],
        activities: [
          { name:"CENTER CIRCLE POSSESSION", duration:"10 min", area:"Center circle", description:"5v2 in center circle. Intense possession — no stepping outside circle. If defenders win ball, they swap with the player who lost it.", coachingPoints:["Use every inch of the circle","Move after every pass — never stand still","Shield from defender before turning"] },
          { name:"WIN THE CENTER GAME", duration:"10 min", area:"Full field", description:"5v5. Points only scored by completing 5 consecutive passes inside the center circle. After earning point, team can attempt to score on goal.", coachingPoints:["Center first — goal second","Center possession as platform","Draw opponents in — then go wide or forward"] },
          { name:"MIDFIELD BATTLES", duration:"15 min", area:"40 x 20 central strip", description:"Physical midfield battles. 4v4. Headers, 50/50s, shields. Whoever wins majority of contested balls earns possession. Intense but fair.", coachingPoints:["Competitive — but safe technique","Win with body shape — not just strength","Second ball — always follow up"], progression:"Winner keeps ball and immediately transitions to attack" },
          { name:"CENTRAL THEN WIDE GAME", duration:"20 min", area:"Full field 7v7", description:"Team must complete 3 passes in central zone before passing wide.", coachingPoints:["Build through center","Wide players patient — wait for center to work","After wide pass — central players push forward"], keyLesson:"Great midfield teams don't just pass the ball — they pull the game to them." },
          { name:"TEMPO CONTROL", duration:"15 min", area:"Full field 7v7", description:"Coach calls 'FAST' or 'SLOW'. Fast = quick passes, vertical intent. Slow = patient possession, draw press. Midfielders must control the tempo.", coachingPoints:["Midfield sets the tone","Players listen to midfield for speed cues","Switch tempos mid-game — use it tactically"] },
          { name:"WEEK CLOSE GAME", duration:"20 min", area:"Full field 7v7", description:"Normal game. End with player discussion: who was the best midfielder today? What did they do that was special?", coachingPoints:["Peer recognition builds culture","Acknowledge midfield quality specifically","Every player: aspire to control the center"], matchChallenge:["Midfielders: Complete 3 turns under pressure","Team: Win central zone possession 5 times","Bonus: Score a goal from central build-up involving all 3 mids"] },
        ],
        nextWeek:"Week 10 covers THE DEFENSIVE LINE — stepping up together and basic offside principles.",
      },
    ],
  },
  // WEEK 10
  {
    week: 10, theme: "Defensive Line Coordination", focus: "Defensive Line & Offside Trap Basics", color: "#f39c12",
    sessions: [
      {
        session: 1, title: "THE DEFENSIVE LINE", subtitle: "When to step and when to hold",
        objectives: { technical:["Defensive line positioning","Step up in coordination","Clearing balls over the top"], tactical:["Reading when to step vs drop","Coordination between two defenders","Defensive line connection to midfield"], physical:["Lateral communication movement","Sprint to step up","Heading from defensive line"], mental:["Defensive communication and trust","Reading striker's run timing","Decisive stepping — no hesitation"] },
        vocabulary: [{ word:"Step", def:"Both defenders move forward together to catch runner offside." },{ word:"Hold", def:"Defensive line stays deep — don't step up." },{ word:"Flat Line", def:"Both defenders at exactly the same depth." },{ word:"Drop", def:"Fall back deeper to defend space behind." }],
        activities: [
          { name:"DEFENSIVE LINE MOVEMENT DRILL", duration:"10 min", area:"Full field width", description:"Two defenders side by side. Practice stepping up and dropping together. Coach calls 'Step', 'Hold', 'Drop'. No ball yet.", coachingPoints:["Move together — same speed","Communicate: 'Step — now!'","Flat line is the goal — no one ahead of the other"] },
          { name:"BALL OVER THE TOP", duration:"10 min", area:"Full field", description:"Server chips ball over defensive line. Defenders must read flight, decide: step or chase. GK communicates. Practice clearing high balls.", coachingPoints:["Communicate with GK on every ball","Decisive — don't slow down before clearing","Clear to wide areas — not across goal"], commonErrors:[{ error:"Defenders separate — one steps, one drops", fix:"You are one unit. Move together or not at all." },{ error:"Hesitating on step — striker gets through", fix:"If you decide to step — COMMIT. Half-step is the danger zone." }] },
          { name:"STRIKER vs DEFENSIVE LINE", duration:"15 min", area:"Half field", description:"Striker starts at halfway line. Server plays ball behind defensive line. Defenders must step in coordination to catch offside or race to clear. GK included.", coachingPoints:["Step at the moment of serve — not after","GK communication: 'Step!' or 'Stay!'","Striker learning: time your run correctly"] },
          { name:"DEFENSIVE LINE GAME", duration:"20 min", area:"Full field 7v7", description:"Attacking team plays lots of long balls. Defending team practices stepping line up and down depending on ball position. Coach calls 'FREEZE' to check line position.", coachingPoints:["Line moves with ball — not independently","Midfield must stay connected to line","Never leave huge gap between midfield and defense"], keyLesson:"A disciplined defensive line is harder to break than two individuals defending separately." },
          { name:"HIGH LINE GAME", duration:"15 min", area:"Full field 7v7", description:"Defending team must keep defensive line at halfway line. Forces strikers to time runs perfectly.", coachingPoints:["Communication is survival on a high line","Risk vs reward — be decisive","Trust the system — don't drop out of nerves"] },
          { name:"FULL SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Normal game. Defensive line can choose their own depth.", coachingPoints:["Smart depth — not too high or too low","Communicate constantly","Reward decisive defensive line steps"], matchChallenge:["Defenders: Move as a unit on 3 occasions","GK: Call the line on 2 occasions","Team: Force 2 offsides"] },
        ],
        nextWeek:"Session 2 introduces OFFSIDE TRAP BASICS — coordinated stepping for U9 level.",
      },
      {
        session: 2, title: "OFFSIDE TRAP PRINCIPLES", subtitle: "Coordinated defensive line stepping",
        objectives: { technical:["Coordinated step-up timing","Ball-watching as a signal to step","Recovery run when trap fails"], tactical:["Offside trap in 2-3-1","Triggers for stepping trap","When NOT to use the trap"], physical:["Explosive step-up speed","Recovery sprint when beaten","Communication while moving"], mental:["Trust in partner stepping at same time","Confidence in the trap","Clear head when trap breaks down"] },
        vocabulary: [{ word:"Trap", def:"Coordinated step forward to catch attacker offside." },{ word:"Trigger", def:"The moment the ball is played forward — step immediately." },{ word:"Spring", def:"Fast explosive step forward when the moment is right." },{ word:"Recover", def:"If trap fails — sprint back and defend immediately." }],
        activities: [
          { name:"OFFSIDE TRAP WARMUP", duration:"10 min", area:"Full field width", description:"Two defenders: 3 passes between midfielders, on 4th pass forward both defenders spring forward together. Walk through first, then add speed.", coachingPoints:["Trigger = ball played forward","Spring at exact same moment","Communication: 'Now!'"] },
          { name:"TRAP WITH STRIKER", duration:"10 min", area:"Half field", description:"Passive striker times run. Defenders practice the step. When trap works, celebrate. When striker beats it, defenders recover and defend.", coachingPoints:["It won't always work — that's fine","Recovery is as important as the trap","GK must be set and ready if trap fails"] },
          { name:"WHEN NOT TO TRAP", duration:"15 min", area:"Full field", description:"Coach calls scenarios where trap is dangerous: 'Ball is behind defensive line — don't trap.' 'Goalkeeper is off line — don't trap.' Players learn judgment.", coachingPoints:["Trap is a tool — not a rule","Read the situation first","If unsure — drop deep and defend"], freezeMoment:"Freeze: 'Should we trap here? Count how many strikers are making runs.' Show the correct decision." },
          { name:"TRAP GAME", duration:"20 min", area:"Full field 7v7", description:"Attacking team earns bonus for scoring from offside-trap failure. Defending team earns bonus for catching attacker offside 3 times.", coachingPoints:["Executing the trap under game pressure","Both defenders must go — no solo trap","Celebrate when trap works — it's a team skill"], keyLesson:"The trap catches runners. The recovery catches the trap failing. You need both." },
          { name:"TACTICAL AWARENESS GAME", duration:"15 min", area:"Full field 7v7", description:"Coach changes offside rule: in this game, offside doesn't apply. Watch the difference in how defenders need to play without the trap option.", coachingPoints:["Appreciate what the offside rule gives defenders","Without it — how must we adjust?","Understanding WHY we use the trap"] },
          { name:"WEEK CLOSE CHAMPIONSHIP", duration:"20 min", area:"Full field 7v7", description:"Full game applying both sessions' learning: defensive line management and trap.", coachingPoints:["Week 10 mastery","Coordinated defense is mature soccer IQ","These players understand something many older players don't"], matchChallenge:["Catch 1 offside trap","Defensive line: hold shape for full game without splitting","GK: Direct defenders on 3 occasions"] },
        ],
        nextWeek:"Week 11 introduces WIDE PLAY & CROSSING — flank attacks and delivery into the box.",
      },
    ],
  },

  // WEEK 11
  {
    week: 11, theme: "Wide Play & Crossing", focus: "Flank Attacks and Delivery", color: "#27ae60",
    sessions: [
      {
        session: 1, title: "WIDE MIDFIELD ATTACK", subtitle: "Getting wide players into dangerous positions",
        objectives: { technical:["Running with ball down the flank","1v1 on the wing","Crossing technique — driven and whipped"], tactical:["Wide midfielder roles in 2-3-1","Timing of wide runs","Creating width to open central spaces"], physical:["Sprint down flank at full pace","1v1 physical battles","Recovery after crossing"], mental:["Bravery on the flank","Confidence in 1v1 situations","Vision to pick the right cross"] },
        vocabulary: [{ word:"Touchline to Byline", def:"Run from wide position all the way to the goal line." },{ word:"Early Cross", def:"Cross delivered before reaching goal line — catches defense off balance." },{ word:"Cutback", def:"Ball played back from goal line to penalty spot area." },{ word:"Overlap", def:"Fullback or midfielder overlaps winger on outside run." }],
        activities: [
          { name:"WIDE RUNNING WARMUP", duration:"10 min", area:"Full field width", description:"Wide players sprint from center circle to touchline, receive pass on the run, drive toward byline, cross for arriving central player. Both sides alternating.", coachingPoints:["Receive on the run — don't stop","Drive at pace — make defender retreat","Look before crossing — where are your runners?"] },
          { name:"1v1 WINGER DUELS", duration:"10 min", area:"20 x 20 on flank", description:"Winger vs defender 1v1. Winger must beat defender and deliver cross. Defender must stop cross. 3 attempts each then rotate.", coachingPoints:["Use body feint to commit defender","Take one touch to shift ball out of feet before driving","Early cross is sometimes better than beating defender"], commonErrors:[{ error:"Winger goes to feet — defender wins easy", fix:"Drive at space past the defender, not at them." },{ error:"Cross too close to goalkeeper", fix:'"Aim for the far post area or penalty spot — make GK choose."' }] },
          { name:"CROSSING AND FINISHING", duration:"15 min", area:"Full field with both wings", description:"Right winger crosses for central runners. Then left winger. Rotate positions. Types: early cross, driven cross, cutback.", coachingPoints:["Crossed ball pace: driven — not floated","Runners: arrive at the ball — don't wait","Cutback is often most dangerous — reward it"] },
          { name:"WIDE OVERLOAD GAME", duration:"20 min", area:"Full field 7v7", description:"Attacking team has 2 wide players. Defending team has 1 wide defender. Forces repeated wide overloads and crossing situations.", coachingPoints:["Exploit the overload — get the cross in early","Central players: arrive late from midfield","Celebrate goals from crosses loudly"], keyLesson:"Width stretches defenses. A stretched defense has gaps in the center." },
          { name:"FLANK COMBINATION GAME", duration:"15 min", area:"Full field 7v7", description:"Goals only count if they come from wide play — winger involved.", coachingPoints:["Force the wide habit","Wingers must be demanding the ball","Center players: find the wide option first"] },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open game. Celebrate wide play and crossing.", coachingPoints:["Did we use width this game?","Best cross of the session award","Goals from crosses are celebrated extra"], matchChallenge:["Each wide player: Deliver 2 crosses","Central players: Score from a cross once","Team: Create 5 wide plays this game"] },
        ],
        nextWeek:"Session 2 covers CROSSING & FINISHING — delivery quality and box movement.",
      },
      {
        session: 2, title: "CROSSING & FINISHING", subtitle: "Delivery quality and movement in the box",
        objectives: { technical:["Accurate driven cross technique","Header technique for finishing","Movement in box to meet cross"], tactical:["Box runs for crosses","Near and far post positioning","Second ball positioning after cross"], physical:["Jump timing for headers","Movement in crowded box","Recovery for second ball"], mental:["Bravery to head the ball","Concentration to meet cross","Composure when chance arrives from cross"] },
        vocabulary: [{ word:"Near Post Flick", def:"Redirect cross at near post toward goal." },{ word:"Far Post Run", def:"Run to far post to meet cross that beats everyone." },{ word:"Penalty Spot", def:"Key finishing zone — position here for cutbacks." },{ word:"Second Ball", def:"Ball that rebounds off GK or post — follow every shot." }],
        activities: [
          { name:"CROSSING QUALITY WARMUP", duration:"10 min", area:"Flank + penalty area", description:"No defenders. 4 crossing stations: right early, right cutback, left early, left cutback. Each station delivers 5 crosses. Players rotate as crossers and receivers. Coach grades each cross 1-3.", coachingPoints:["Cross 1: driven, waist height, near post","Cross 2: driven, across goal, far post","Cutback: sharp pass back to penalty spot"] },
          { name:"HEADING TECHNIQUE", duration:"10 min", area:"Goal area", description:"Basic heading technique: toss ball to self, head back with forehead. Then: serve from hands to partner who heads on goal. Start close, build distance.", coachingPoints:["Eyes open","Meet ball with forehead — don't let it hit top of head","Attack the ball — don't wait for it"], progression:"Serve from the side — cross heading motion" },
          { name:"CROSS AND SCORE GAME", duration:"15 min", area:"Full field with goals", description:"Crossing game: winger delivers, 2 attackers vs 1 defender + GK in box. Multiple repetitions each side.", coachingPoints:["Runners must time runs — arrive at cross not before","Near post: sharp flick","Far post: power header or volley"], commonErrors:[{ error:"Runners arrive too early and stand under cross", fix:'"Start your run when the winger is at the byline — not before."' },{ error:"Cross floated too slow — GK reads easily", fix:"Drive it. Fast cross = difficult for GK and defenders." }] },
          { name:"BOX MOVEMENT GAME", duration:"20 min", area:"Full field 7v7", description:"Attacking team must have minimum 2 players in box when a cross is coming. Coach calls 'CROSS!' when winger receives — both center players must sprint into box.", coachingPoints:["Box movement is a habit — build it now","Arrive at different angles — near and far post covered","If no cross — take up support position outside box"], keyLesson:"A cross into an empty box is just a clearance. Cross into a full box is an opportunity." },
          { name:"CROSSING TOURNAMENT", duration:"15 min", area:"Full field 7v7", description:"Mini tournament: which team scores more goals from crosses in 10 minutes? No central goals allowed.", coachingPoints:["Commitment to wide play","Quality over quantity","Support play after cross equally important"] },
          { name:"WEEK CLOSE GAME", duration:"20 min", area:"Full field 7v7", description:"Open game applying all wide play principles from the week.", coachingPoints:["Celebrate wide goals above all others","Goals scored this way are the most beautiful in the game","Each player: identify your wide play contribution this week"], matchChallenge:["Score a goal from a cross","Wide players: 1 assist each from wide delivery","Team: Crosses into box 6 times minimum"] },
        ],
        nextWeek:"Week 12 introduces PRESSING HIGH — aggressive press to win ball in opponent's third.",
      },
    ],
  },
  // WEEK 12
  {
    week: 12, theme: "Pressing High", focus: "Aggressive Press & Winning Ball High", color: "#c0392b",
    sessions: [
      {
        session: 1, title: "HIGH PRESS TRIGGERS", subtitle: "When and how to press high as a team",
        objectives: { technical:["Pressing run angle","Pressing intensity and speed","Winning ball from pressed defender"], tactical:["Press triggers in 2-3-1","Coordinated high press","Cover positions during press"], physical:["Explosive sprints to press","High-intensity sustained pressing","Recovery after press"], mental:["Hunger for the ball","Don't stop — keep pressing","Trust teammates to cover"] },
        vocabulary: [{ word:"Trigger", def:"A moment that signals the whole team to press together." },{ word:"Block Passing Lane", def:"Press at angle to force play one direction only." },{ word:"Coordinated Press", def:"All front players press at exactly the same time." },{ word:"Win It High", def:"Winning possession in opponent's third = scoring chance." }],
        activities: [
          { name:"PRESS RUNNING WARMUP", duration:"10 min", area:"20 x 20", description:"Player jogs slowly. Coach calls 'PRESS' — player sprints 10 yards to cone. Reset. Repeat with random timing. Add: on 'PRESS' — sprint AND close down partner with ball.", coachingPoints:["Full sprint to press — never jog to press","Angle your run to block the easy pass","Arrive under control — don't fly past"] },
          { name:"TRIGGER RECOGNITION", duration:"10 min", area:"Half field", description:"Coach explains press triggers: (1) Back pass to GK, (2) Slow side-ways pass, (3) Defender faces their own goal, (4) Poor first touch. Show each scenario. Players identify trigger and call 'PRESS!'", coachingPoints:["All 4 triggers must be memorized","Recognition is fast — reaction must be faster","False trigger = opponent escapes — stay disciplined"] },
          { name:"STRIKER-LED HIGH PRESS", duration:"15 min", area:"Full field", description:"Striker presses the two defenders and forces ball to one side. Two wide midfielders press that side together. Central midfielder covers the switch. Practice sequence 6 times.", coachingPoints:["Striker shows defender press direction with body angle","Wide mid on press side: sprint immediately","Central mid: don't press — cover the switch"], commonErrors:[{ error:"Pressing one player while others watch", fix:"Press is FOUR players. The other three must move even if not directly pressing." },{ error:"Striker presses too early — defenders play through", fix:"Wait for the trigger. Don't press random passes — press triggers." }] },
          { name:"HIGH PRESS GAME", duration:"20 min", area:"Full field 7v7", description:"Pressing team gets 2 points for winning ball in opponent's third. Normal goal = 1 point.", coachingPoints:["Reward the press, not just the goal","Press leads to goals eventually","Intensity must be maintained for full game"], keyLesson:"A great press makes the opponent rush. Rushed opponents make mistakes." },
          { name:"PRESS RESISTANCE vs HIGH PRESS", duration:"15 min", area:"Full field 7v7", description:"One team presses high. Other team practices press escape from Week 8. Both teams earn points for executing their plan.", coachingPoints:["Press: trigger recognition and coordinated run","Escape: third man and quick combination","Both plans are valid — execution decides"] },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open game. Celebrate when press wins the ball.", coachingPoints:["Notice who presses hardest","High press creates energy — ride that wave","Exhausted from pressing? That's elite effort."], matchChallenge:["Win the ball high in opponent's third once","Striker: Press defender and force error once","Team: Execute coordinated press 4 times this game"] },
        ],
        nextWeek:"Session 2 covers PRESS TRAPS — channeling attackers into corners and dead ends.",
      },
      {
        session: 2, title: "PRESS TRAPS", subtitle: "Channel attackers into corners and dead ends",
        objectives: { technical:["Angled pressing to force sideline","Second defender timing to trap","Winning ball from trapped defender"], tactical:["Sideline as extra defender","Press trap coordination","Cover after trap is sprung"], physical:["Double sprint — press then cover","Explosive press closing speed","High-intensity repeated trapping"], mental:["Patience to set the trap","Explosive decision to spring it","Resist breaking the trap too early"] },
        vocabulary: [{ word:"Funnel", def:"Direct opponent toward the touchline with press angle." },{ word:"Spring the Trap", def:"Second defender arrives as first has funneled ball to side." },{ word:"Dead Zone", def:"Touchline + press = nowhere to go." },{ word:"Double Team", def:"Two defenders trap one attacker simultaneously." }],
        activities: [
          { name:"FUNNEL WARMUP", duration:"10 min", area:"30 x 20", description:"Attacker in middle of grid. Defender presses at angle — always toward touchline side, never toward center. Attacker must find center pass — defender must cut it off.", coachingPoints:["Body angle FORCES direction","Never press straight — always funnel to side","Think of yourself as a wall on the inside"] },
          { name:"TWO DEFENDER TRAP", duration:"10 min", area:"Touchline channel 30 x 10", description:"First defender funnels ball toward touchline. Second defender arrives from behind to trap. Ball is stuck between two defenders and touchline.", coachingPoints:["First defender: force, don't win","Second defender: arrive from behind at speed","Trap is: press + sideline + second defender arriving = nowhere to go"], progression:"Attacker has escape pass option — third defender covers that pass" },
          { name:"CORNER TRAP GAME", duration:"15 min", area:"40 x 30", description:"4v4. Defending team earns 2 points for trapping ball in corner of pitch. Attacking team earns points for escaping and completing 8 passes.", coachingPoints:["Patience to set the trap","First defender funnels","Second defender waits — springs only when timing is right"], commonErrors:[{ error:"Second defender arrives too early — attacker escapes inside", fix:"Wait. Let first defender have 2 seconds to funnel. Then arrive." },{ error:"Trap set but no one wins the ball", fix:"When trapped — commit. One of you wins it — the other covers." }] },
          { name:"HIGH PRESS + TRAP GAME", duration:"20 min", area:"Full field 7v7", description:"Combining Session 1 (coordinated high press) with Session 2 (trap into corners). Points: 1 for winning ball anywhere high, 2 for trapping in corner.", coachingPoints:["Press first — trap is bonus","Don't ignore counter after winning ball","Trap wins = instant counter opportunity"], keyLesson:"The trap is a weapon. Patient teams set it. Brave teams spring it." },
          { name:"INTENSITY GAME", duration:"15 min", area:"Full field 7v7", description:"Maximum intensity — 3 minute bursts. Pressing team changes every 3 minutes. High press and trap attempts all game.", coachingPoints:["Fitness and intensity reward","Those who press hardest earn the most","Celebrate the work rate"] },
          { name:"WEEK CLOSE GAME", duration:"20 min", area:"Full field 7v7", description:"Normal game. Apply all pressing knowledge from Weeks 7 and 12.", coachingPoints:["When to counter, when to press, when to trap","Most mature teams use all three in one game","End of week celebration: who pressed hardest this week?"], matchChallenge:["Execute 1 press trap in the corner","Win the ball high and score from it","Team: Sustain high press for full 5 minutes at some point"] },
        ],
        nextWeek:"Week 13 introduces PLAYING THROUGH LINES — vertical passing to break pressure.",
      },
    ],
  },
  // WEEK 13
  {
    week: 13, theme: "Playing Through Lines", focus: "Vertical Play and Breaking Pressure", color: "#8e44ad",
    sessions: [
      {
        session: 1, title: "VERTICAL PASSING", subtitle: "Play forward through the lines, not around them",
        objectives: { technical:["Through-pass timing and weight","Receiving between lines","Turning once through the line"], tactical:["Identify gaps between defensive lines","Timing of run vs timing of pass","Third man combinations beyond the line"], physical:["Sharp movement between lines","Sprint through the gap","Dynamic receiving technique"], mental:["Bravery to play through pressure","Patience to wait for the gap","Trust the through-pass philosophy"] },
        vocabulary: [{ word:"Line-Breaking Pass", def:"A pass that cuts through the opponent's defensive line." },{ word:"Between the Lines", def:"The space between their midfield and defense." },{ word:"Receive and Face", def:"Receive the through-pass and immediately face forward." },{ word:"Open the Gate", def:"Create the gap through movement before the pass." }],
        activities: [
          { name:"THROUGH PASS WARMUP", duration:"10 min", area:"30 x 20", description:"Three cones in a line representing defensive line. Player must pass through gaps in the cone line to partner on other side. Partner must move to open the gate. Increase pressure by adding passive defender.", coachingPoints:["Pass must go through — not over or around","Receiver moves to create the gap","Pass immediately when gate opens"] },
          { name:"BETWEEN THE LINES DRILL", duration:"10 min", area:"Half field", description:"Two defending lines: one at 30 yards (midfield), one at 15 yards (defense). Two attackers try to receive passes between the lines and turn.", coachingPoints:["Move sideways to create receiving angle between lines","Turn quickly once through — don't wait","Third man runs beyond last line as soon as you turn"], progression:"Defenders become active" },
          { name:"SPLIT PASS GAME", duration:"15 min", area:"Full field half", description:"Coach places two cones representing a defensive pair with a gap. Server must find the split pass between cones. Receiver controls and shoots on goal.", coachingPoints:["Wait for the split to open","Pass must be firm and accurate through the gap","Receiver: take touch forward — not sideways"], commonErrors:[{ error:"Forcing the split when gap is closed", fix:"Be patient. If gap isn't there, recycle. Wait for it to open." },{ error:"Receiver takes touch backward after receiving between lines", fix:'"You are through the line! Turn forward immediately!"' }] },
          { name:"LINE BREAK GAME", duration:"20 min", area:"Full field 7v7", description:"Goals only valid if preceded by a line-breaking pass into the striker or midfielder running beyond last line.", coachingPoints:["Look for the vertical ball first","If it's not there — wide or recycle","Celebrate when you find it — it's a skill"], keyLesson:"Teams that play through lines are more dangerous than teams that go around them." },
          { name:"LINES GAME", duration:"15 min", area:"Full field 7v7", description:"3 zones marked by cones. Point for completing 3 passes in middle zone, then playing into attacking zone.", coachingPoints:["Control the middle zone first","Line break into attacking zone is the goal","Back to middle if forward pass blocked"] },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open game. Coach highlights vertical passes that break lines.", coachingPoints:["Notice the vertical balls that work","Name them: 'Line break — that's Week 13!'","End session with player discussion on their best vertical passes"], matchChallenge:["Every player: Attempt 1 line-breaking pass","Midfielders: Receive between lines and turn twice","Team: Score from a line-breaking sequence"] },
        ],
        nextWeek:"Session 2 covers THE THIRD MAN BEYOND THE LAST DEFENDER.",
      },
      {
        session: 2, title: "BREAKING THE LAST LINE", subtitle: "Third man runs beyond the last defender",
        objectives: { technical:["Timing of run to beat offside","First touch forward after receiving in behind","Finishing when through on goal"], tactical:["Third man movement coordination","Midfielder releasing striker behind","Combination to break last line"], physical:["Sprint timing and acceleration","Running beyond the defense","First touch at pace"], mental:["Reading the right moment to run","Composure when through on goal","Awareness of offside line"] },
        vocabulary: [{ word:"Inch Perfect", def:"Pass timed perfectly — not too early, not too late." },{ word:"Run the Channels", def:"Run into the space between center back and fullback." },{ word:"In Behind", def:"Space behind the last defender — most dangerous attacking area." },{ word:"Release", def:"The pass that sends a player in behind the defense." }],
        activities: [
          { name:"TIMING OF RUNS", duration:"10 min", area:"Half field", description:"Striker starts on last defender's shoulder. Server holds ball. When server's head goes down to pass, striker makes run. If timed perfectly — receives ball in behind. If too early — offside.", coachingPoints:["Don't run before server's head drops","Explosive acceleration after triggering run","First touch: set for shot — no slowing down"] },
          { name:"CHANNEL RUNS", duration:"10 min", area:"Full field", description:"Striker runs channel between center back and fullback. Midfielder plays 'in behind' pass into channel. Striker collects, crosses or shoots.", coachingPoints:["Channel is the gap — find it","Run PAST defender, not toward them","Midfielder: strike the pass as striker is moving, not after they've gone"], progression:"Add active defender in the channel" },
          { name:"1v1 WITH GK — FROM BEHIND DEFENSE", duration:"15 min", area:"Full field", description:"Striker starts behind midfield. Midfielder plays ball over/through last line. Striker must receive and score 1v1 with GK.", coachingPoints:["Eyes up before receiving — where is GK?","Take touch that moves ball away from GK","Side-foot for accuracy — instep if distance needed"], commonErrors:[{ error:"Running too straight — easier for GK to intercept", fix:"Take touch to the side to open angle before shooting." },{ error:"Panic shot — too early or too close", fix:'"Take one more touch. You have time. BREATHE."' }] },
          { name:"BREAK THE LAST LINE GAME", duration:"20 min", area:"Full field 7v7", description:"Goals in behind count 2 points. Central goals count 1.", coachingPoints:["Seek the in-behind opportunity","Combination to release is essential","Defender: step to catch offside or drop — decide quickly"], keyLesson:"Space in behind is the most dangerous space in soccer. Teams that find it regularly win." },
          { name:"COMBINATION TO RELEASE GAME", duration:"15 min", area:"Full field 7v7", description:"Striker must make run within 3 seconds of midfielder receiving. Midfield must release within those 3 seconds.", coachingPoints:["Timing is everything","Both players must be reading each other","Build trust through repetition"] },
          { name:"WEEK CLOSE GAME", duration:"20 min", area:"Full field 7v7", description:"Full game applying all of Week 13's through-passing and line-breaking principles.", coachingPoints:["Vertical intent throughout","Celebrate every line break regardless of goal","Identity: we are a team that plays THROUGH teams"], matchChallenge:["Score in behind once","Midfielder: Release striker with perfect pass once","Team: Break the last line 3 times this game"] },
        ],
        nextWeek:"Week 14 introduces RESTING IN POSSESSION — controlling tempo and the game clock.",
      },
    ],
  },
  // WEEK 14
  {
    week: 14, theme: "Resting in Possession", focus: "Controlling Tempo — Slow or Fast", color: "#16a085",
    sessions: [
      {
        session: 1, title: "CONTROLLING TEMPO", subtitle: "Speed up and slow down deliberately",
        objectives: { technical:["Shielding and holding possession under no pressure","Slow build-up passing","Quick switch of tempo when moment arrives"], tactical:["When to speed up vs slow down","Tempo as tactical control","Rest in possession to tire opponents"], physical:["Possession endurance","Recovery while in possession","Energy management"], mental:["Patience — not every moment needs a sprint","Read when to change gear","Composure in slow build-up"] },
        vocabulary: [{ word:"Tempo", def:"The speed of the game — we control it, not opponents." },{ word:"Rest in Possession", def:"Slow possession while players recover and reorganize." },{ word:"Gear Change", def:"Sudden switch from slow to fast to catch opponent sleeping." },{ word:"Clock Management", def:"Control possession to manage game time." }],
        activities: [
          { name:"SLOW-FAST PASSING WARMUP", duration:"10 min", area:"20 x 20", description:"Possession rondo 5v2. Coach calls 'SLOW' — maximum 3 seconds per touch. Coach calls 'FAST' — 1 touch only. Players must switch immediately.", coachingPoints:["Both speeds require concentration","Slow: shield, protect, move","Fast: one touch, move, communicate"] },
          { name:"TEMPO SITUATIONS", duration:"10 min", area:"Full field", description:"Coach describes game situations: 'You're winning 2-0 with 2 minutes left — slow down.' 'You're drawing, you need to score — speed up.' Players practice the correct response.", coachingPoints:["Read the situation — choose the tempo","Communicate tempo to teammates","No shame in slowing down — it's intelligence"] },
          { name:"KEEP BALL — SLOW", duration:"15 min", area:"30 x 20", description:"5v2 possession with rule: minimum 3 seconds must be held per touch. Any rushed passes = possession turnover.", coachingPoints:["Take your time","Shield when needed","Look before receiving — know where next pass goes before ball arrives"], commonErrors:[{ error:"Rushing even when defender is 3 yards away", fix:"If pressure isn't near — slow down. Use the time you have." },{ error:"Slow passes that arrive slowly too — easy to intercept", fix:"Hold the ball slowly, but when you pass — it's still driven and accurate." }] },
          { name:"TEMPO GAME", duration:"20 min", area:"Full field 7v7", description:"Coach calls tempo: 'SLOW' = no goals allowed for 2 minutes, just possession. 'FAST' = 1 minute window where goals count double.", coachingPoints:["Embrace the slow — it's powerful","Gear change to fast must be explosive","Confusion in opponents is the goal of slow possession"], keyLesson:"The team that controls tempo controls the game. It takes intelligence to slow down when you could go fast." },
          { name:"WINNING TEAM SLOWS DOWN GAME", duration:"15 min", area:"Full field 7v7", description:"When a team scores, they must slow down for next 3 minutes. Can't score again until 3 minutes of possession mastery.", coachingPoints:["Real-game scenario","Don't always chase goals — sometimes protect leads","Patience is a competitive skill"] },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open game. Players choose their tempo independently.", coachingPoints:["Who is reading the game and managing tempo?","Celebrate smart possession — not just goals","Intelligence over athleticism moment"], matchChallenge:["Team: Hold possession for 45 unbroken seconds once","Midfielders: Dictate tempo change once each","Team: Execute a gear-change — slow to fast — leading to a chance"] },
        ],
        nextWeek:"Session 2 covers TIKI-TAKA BASICS — short pass and move to control territory.",
      },
      {
        session: 2, title: "TIKI-TAKA BASICS", subtitle: "Short pass and move to control territory",
        objectives: { technical:["One-touch passing accuracy","Movement immediately after every pass","Creating triangles constantly"], tactical:["Move opponents with possession","Create space through movement","Tiki-taka as a pressing and possession tool"], physical:["Continuous movement without ball","Endurance through motion","Quick directional changes"], mental:["Patience in possession","Trust in the system","Joy of passing football"] },
        vocabulary: [{ word:"Move It", def:"Pass and move — never stand still after passing." },{ word:"Triangle", def:"Three passing options form a triangle — always seek triangles." },{ word:"Escape Triangle", def:"Move to create new triangle after passing." },{ word:"Keep It", def:"Possession has value even without going forward." }],
        activities: [
          { name:"ONE-TOUCH TRIANGLE WARMUP", duration:"10 min", area:"15 x 15", description:"Groups of 3. One-touch passing only in triangle. After every pass, player must move to new position. Target: 20 consecutive one-touch passes.", coachingPoints:["Pass and immediately move to new triangle point","Call for ball before it arrives","Support angle: never behind the passer — always to the side"] },
          { name:"4v1 RONDO — ONE TOUCH", duration:"10 min", area:"10 x 10", description:"4v1 rondo. All 4 must use one touch only. Defender changes when possession lost.", coachingPoints:["Anticipate — body shape before ball arrives","Rotate around the square","Move AFTER passing — not before"] },
          { name:"TIKI-TAKA 6v3", duration:"15 min", area:"20 x 20", description:"6 attackers vs 3 defenders. Attackers maintain possession using constant movement and short passing.", coachingPoints:["Players without ball always offering 2 passing options","Triangles everywhere","Pass to feet when stationary, to space when moving"], progression:"Add rule: no player can receive from the player who gave it to them" },
          { name:"TIKI-TAKA TERRITORY GAME", duration:"20 min", area:"Full field 7v7", description:"Teams score by completing 10 consecutive passes — each set of 10 = 1 point. Goals = 2 points.", coachingPoints:["10 consecutive passes is harder than scoring","But it tires opponents and creates chances","Possession teams are fit teams — keep moving"], keyLesson:"Tiki-taka is not about showing off — it's about tiring opponents and creating perfect moments." },
          { name:"SLOW TIKI-TAKA vs HIGH PRESS", duration:"15 min", area:"Full field 7v7", description:"One team plays tiki-taka. Other team presses from Week 12. Both teams applying their principles.", coachingPoints:["Both plans are valid and effective","Tiki-taka absorbs the press when executed well","High press wins ball when tiki-taka makes mistakes"] },
          { name:"WEEK CLOSE GAME", duration:"20 min", area:"Full field 7v7", description:"Beautiful game with both tempo awareness and tiki-taka passing.", coachingPoints:["Week 14 is a sophisticated week — celebrate the growth","These players are playing smart soccer","End with team reflection: how have we improved since Week 1?"], matchChallenge:["Complete 12 consecutive passes as a team once","Score a goal that began from slow possession","Every player: Pass and move on every single possession this game"] },
        ],
        nextWeek:"Week 15 introduces ATTACKING PATTERNS — rehearsed moves the whole team knows.",
      },
    ],
  },
  // WEEK 15
  {
    week: 15, theme: "Attacking Patterns", focus: "Rehearsed Attacking Moves", color: "#d35400",
    sessions: [
      {
        session: 1, title: "ATTACKING PATTERN A — THE OVERLAP", subtitle: "Timing and execution of the full overlap",
        objectives: { technical:["Overlap run timing","Ball played into overlap run","Crossing from overlap position"], tactical:["When to trigger overlap in 2-3-1","Which player overlaps in each scenario","Creating 2v1 from overlap"], physical:["Explosive overlap run","Sustained wide running","Recovery after overlap run"], mental:["Communication of overlap intent","Trust in the pattern","Automatic execution after repetition"] },
        vocabulary: [{ word:"Pattern Play", def:"A rehearsed sequence that the whole team knows and executes." },{ word:"Signal", def:"Word or gesture that triggers the pattern — 'GO!'." },{ word:"Auto-Pilot", def:"Pattern so practiced it happens automatically in games." },{ word:"Routine", def:"Like set pieces but in open play — a trusted sequence." }],
        activities: [
          { name:"OVERLAP PATTERN WALKTHROUGH", duration:"10 min", area:"Full field", description:"Walk through at slow speed: Defender receives ball. Midfielder overlaps outside. Defender passes into overlap run. Midfielder crosses. Striker finishes near post. Repeat 5 times walking.", coachingPoints:["Everyone knows their role before it starts","Timing: midfielder starts overlap when defender receives","Striker: start run as midfielder crosses line with ball"] },
          { name:"OVERLAP PATTERN — HALF SPEED", duration:"10 min", area:"Full field", description:"Same pattern at jogging pace. Introduce signal: any player can call 'GO' to trigger the overlap.", coachingPoints:["Call 'GO' at the right moment","Overlapping player must accelerate on the call","Striker: back post is yours unless near post is open"] },
          { name:"OVERLAP PATTERN — GAME SPEED", duration:"15 min", area:"Full field", description:"Full speed with passive defending. Pattern must work despite defenders present. Repeat until fluid.", coachingPoints:["Speed changes everything — trust the practice","Lose the ball in practice, not in games","Minor adjustments to timing if defenders intercept"], progression:"Add active defending — pattern must adapt" },
          { name:"OVERLAP IN GAME", duration:"20 min", area:"Full field 7v7", description:"Normal game. When any player calls 'GO', team executes Pattern A. Count how many successful overlaps occur.", coachingPoints:["Not every moment is Pattern A — read the game","When it's available — execute","Celebrate every Pattern A execution"], keyLesson:"Great teams have plans. The best teams execute their plans at full speed under pressure." },
          { name:"PATTERN PRACTICE GAME", duration:"15 min", area:"Full field 7v7", description:"Goals from Pattern A = 3 points. Regular goals = 1 point.", coachingPoints:["Create the overlap opportunity consciously","Set up the pattern — don't rush into it","Patient build, explosive execution"] },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open game. Players call patterns themselves.", coachingPoints:["Count Pattern A executions","Celebrate intelligent pattern recognition","Players now have an attacking language"], matchChallenge:["Team: Execute Pattern A successfully twice","Score a Pattern A goal once","Every player: Know their role in Pattern A without asking"] },
        ],
        nextWeek:"Session 2 covers PATTERN B — the third man run off the striker.",
      },
      {
        session: 2, title: "ATTACKING PATTERN B — THIRD MAN OFF STRIKER", subtitle: "The third man run off the striker's hold",
        objectives: { technical:["Striker hold and layoff timing","Third man timing of run","Striker's dummy to open lane"], tactical:["Pattern B trigger and execution","Reading when striker has the ball","Third man arrives at the right moment"], physical:["Third man acceleration","Striker hold under contact","Running at full speed to meet layoff"], mental:["Trust in the pattern","Read the striker's movement","Anticipate — not react"] },
        vocabulary: [{ word:"Pattern B", def:"Striker receives, holds, lays off to third man running from deep." },{ word:"Third Man Runner", def:"The player arriving from deeper positions to receive the layoff." },{ word:"Dummy", def:"Striker pretends to shoot but lets ball run through." },{ word:"Trigger Pass", def:"The pass into striker's feet is the trigger for third man to run." }],
        activities: [
          { name:"PATTERN B WALKTHROUGH", duration:"10 min", area:"Full field", description:"Walk through at slow speed: Midfielder plays ball into striker's feet. Striker holds and lays off. Central midfielder makes late run. Receives layoff and shoots. Repeat 5 times slowly.", coachingPoints:["Trigger: ball to striker's feet = third man starts run","Striker: first touch to hold, second touch layoff","Third man: arrive at layoff — don't arrive before it"] },
          { name:"PATTERN B — HALF SPEED", duration:"10 min", area:"Full field", description:"Jogging pace with both patterns. Player can call 'GO A' or 'GO B' to select pattern. Teams must execute correctly.", coachingPoints:["Two patterns now in the repertoire","Call clearly: A or B?","Wrong pattern execution = reset and repeat"] },
          { name:"PATTERN B vs DEFENDERS", duration:"15 min", area:"Half field", description:"Pattern B against 2 active defenders. Third man must time run to beat the press. Striker must hold under real pressure.", coachingPoints:["Striker: if defender arrives — dummy and spin","Third man: adjust run based on where defender is","If pattern breaks — have secondary plan"], commonErrors:[{ error:"Third man runs too early — doesn't receive layoff", fix:"Trigger is the ball to striker's feet. Not before." },{ error:"Striker lays off but third man is not there", fix:"Pattern B requires communication. Both must confirm readiness." }] },
          { name:"A OR B — READ THE GAME", duration:"20 min", area:"Full field 7v7", description:"Normal game with both patterns available. Players read which pattern is available and call it. Goals from either pattern = 3 points.", coachingPoints:["Pattern A when overlap is available (wide space)","Pattern B when striker has time to hold (central space)","Read the game — not just the pattern"], keyLesson:"Two patterns is twice the threat. The team that can't defend both will concede." },
          { name:"PATTERN RECOGNITION GAME", duration:"15 min", area:"Full field 7v7", description:"Coach calls out scenario. Players identify: 'Which pattern fits?' Then execute.", coachingPoints:["Game IQ building","Players calling patterns without coach input","Trust yourselves — you know these"] },
          { name:"WEEK CLOSE SHOWCASE GAME", duration:"20 min", area:"Full field 7v7", description:"Final game of Week 15. Team plays to show off everything learned. Coach watches and notes best moments of the season so far.", coachingPoints:["Play with confidence","Execute patterns with pride","Week 15 of 20 — reflect on the journey"], matchChallenge:["Score a Pattern A goal","Score a Pattern B goal","Team: Call both patterns at least once each in this game"] },
        ],
        nextWeek:"Week 16 introduces DEFENDING DEEP — the low block and counter-attacking strategy.",
      },
    ],
  },

  // WEEK 16
  {
    week: 16, theme: "Defending Deep", focus: "Low Block and Counter", color: "#2c3e50",
    sessions: [
      {
        session: 1, title: "LOW BLOCK SHAPE", subtitle: "Pack the midfield and defend deep space",
        objectives: { technical:["Defensive positioning in low block","Blocking shots and crosses","Winning defensive headers"], tactical:["Low block shape in 2-3-1","Defending as compact unit","Patience in defensive posture"], physical:["Sustained defensive effort","Recovery after clearances","Physical defensive challenges"], mental:["Defensive concentration for long periods","Not getting drawn out","Trust in the defensive system"] },
        vocabulary: [{ word:"Low Block", def:"Deep defensive shape designed to deny space behind." },{ word:"Compact", def:"All defenders and midfielders within 20 yards of goal." },{ word:"Absorb", def:"Let opponent attack but deny the shot or cross." },{ word:"Discipline", def:"Holding position even when tempted to press." }],
        activities: [
          { name:"LOW BLOCK SHAPE DRILL", duration:"10 min", area:"Own defensive third", description:"Full team organizes low block: 2 defenders, 3 midfielders all within 20 yards of goal. Ball circulates wide. Players hold shape — no one leaves block. Coach checks: no gaps bigger than 3 yards.", coachingPoints:["Width controlled by block","Depth controlled by block","No one pulled out — ever"] },
          { name:"BLOCK + CLEAR", duration:"10 min", area:"Defensive third", description:"Crosses and drives come in. Defenders and midfielders in block must clear. Clear high, wide, and far. No ducking. GK communicates.", coachingPoints:["Get body in line of ball","Head it or chest it — don't let it hit you sideways","Clear toward touchline — not across goal"] },
          { name:"LOW BLOCK vs ATTACK", duration:"15 min", area:"Full field", description:"5 attackers vs full low block of 5 + GK. Attackers must break block in 45 seconds. If block holds — they win. Count how many times block holds.", coachingPoints:["Stay organized — panic breaks the block","Block wins by NOT giving up the shot","GK: communicate constantly"], commonErrors:[{ error:"Defender chases the ball out of block", fix:"HOLD. One player out of block creates a gap. Stay connected." },{ error:"Block opens when ball goes wide", fix:"Shift the block to the ball side but keep it compact. Don't open up." }] },
          { name:"LOW BLOCK + COUNTER GAME", duration:"20 min", area:"Full field 7v7", description:"Defending team uses low block. If they win ball, they counter-attack (Week 7 methods). Points: 1 for holding block 3 minutes, 2 for counter goal.", coachingPoints:["Combine Week 7 and Week 16","Block first — then explode on counter","Best defensive teams are also great counter teams"], keyLesson:"A low block doesn't mean giving up — it means inviting the opponent forward, then striking when they overcommit." },
          { name:"HOLD AND WAIT GAME", duration:"15 min", area:"Full field 7v7", description:"Defending team holds block for 4 minutes. At 4 minute mark, defending team releases and goes to score. Most counter goals in 2 minutes wins.", coachingPoints:["Patience is a weapon","Hold position until the moment","Explosive release when time comes"] },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Normal game. Team may choose when to use low block vs press.", coachingPoints:["Read the game — when do we block?","Tactical intelligence is the goal of the season","Celebrate tactical decisions as much as physical ones"], matchChallenge:["Hold organized low block for 3 consecutive minutes","Score a counter from a low block situation","GK: Communicate block positions on 5 occasions"] },
        ],
        nextWeek:"Session 2 covers DEEP DEFENDING COUNTER — winning ball deep and releasing instantly.",
      },
      {
        session: 2, title: "DEEP DEFENDING COUNTER", subtitle: "Win the ball deep and release forward immediately",
        objectives: { technical:["Winning ball cleanly from deep positions","Instant forward release pass","Running forward from deep positions"], tactical:["Release trigger after winning deep ball","Who runs forward from low block?","Counter from deep — different from mid-block counter"], physical:["Long sprint from deep position","First pass accuracy under fatigue","Sustained deep defending then explosive sprint"], mental:["Instant transition mentality","Belief in the counter even from deep","Release the counter without overthinking"] },
        vocabulary: [{ word:"Release Valve", def:"The player who runs forward to receive the counter pass." },{ word:"Immediate", def:"Counter must be released instantly — within 2 seconds." },{ word:"Safety First", def:"If counter isn't clear — keep possession safely, don't lose it." },{ word:"Reward Position", def:"The player who works hardest defensively earns the forward run." }],
        activities: [
          { name:"DEEP WIN AND RELEASE", duration:"10 min", area:"Own half", description:"Defender wins ball deep in own half. Immediate pass to striker making run. Two touches maximum on the release. Forward runs into space.", coachingPoints:["Win it, look up — one second max","First pass: accuracy over power","Striker: make run BEFORE defender wins ball — anticipate"] },
          { name:"THREE ROLES ON COUNTER FROM DEEP", duration:"10 min", area:"Full field", description:"Three players: defender wins ball deep (A), midfielder releases (B), striker runs in behind (C). Walk their route, then practice at pace.", coachingPoints:["A: win and release in 1 touch if possible","B: receive and immediately play forward","C: hit the gas on A's tackle — not after"] },
          { name:"DEEP COUNTER GAME", duration:"15 min", area:"Full field 7v7", description:"Defending team must win ball inside own penalty area before counter starts. Then 3v2 counter attack. Repeat 8 times.", coachingPoints:["Deep win = maximum urgency on counter","Fast and direct — 3 passes maximum to goal","If 3v2 is gone — slow down and build"], progression:"Defending team allowed to foul the counter — adds realism" },
          { name:"LOW BLOCK COUNTER CHAMPIONSHIP", duration:"20 min", area:"Full field 7v7", description:"Full integration game: low block + deep counter. Best team at combining both skills wins the session.", coachingPoints:["Which team is best at the full system?","Defense AND attack — complete team","Celebrate complete team performance"], keyLesson:"The team that defends deep and counter-attacks well is one of the hardest teams to beat in the world." },
          { name:"SCENARIO GAME", duration:"15 min", area:"Full field 7v7", description:"Coach creates scenarios: 'You're winning 1-0 — use low block.' 'You're losing 0-1 — press high.' Team must identify and execute the correct approach.", coachingPoints:["Situational awareness is elite IQ","Players calling the approach themselves","Trust the knowledge built over 16 weeks"] },
          { name:"WEEK CLOSE GAME", duration:"20 min", area:"Full field 7v7", description:"Open game. Apply Weeks 15 and 16 together: patterns when attacking, low block when defending.", coachingPoints:["Attack with patterns, defend with discipline","Complete team concept emerging","4 weeks remaining — what do we still want to achieve?"], matchChallenge:["Score from a pattern in attack","Hold low block for 2 minutes in same game","Team: Complete both in one game for perfect week close"] },
        ],
        nextWeek:"Week 17 introduces ADVANCED TRANSITIONS — winning ball and attacking in 3 seconds.",
      },
    ],
  },
  // WEEK 17
  {
    week: 17, theme: "Advanced Transitions", focus: "Winning Ball — Instant Attack", color: "#e67e22",
    sessions: [
      {
        session: 1, title: "TRANSITION TRIGGERS", subtitle: "Turn defense into attack in 3 seconds",
        objectives: { technical:["Fastest possible first pass after winning ball","Sprint into attack position instantly","Composure in 3-second transition window"], tactical:["Who attacks on transition?","Which direction to counter?","Transition triggers vs restraint moments"], physical:["Maximum sprint in transition window","Explosive first step","Sustained counter-attack run"], mental:["Instant gear change — defense to attack","Fearlessness in transition","No hesitation — commit to the attack"] },
        vocabulary: [{ word:"3-Second Window", def:"The most dangerous time after winning ball — use it." },{ word:"Flood Forward", def:"Multiple players sprint forward simultaneously on transition." },{ word:"Restraint", def:"Recognize when transition window is closed — don't force it." },{ word:"Trigger Person", def:"The player who wins ball and decides: counter or hold?" }],
        activities: [
          { name:"3-SECOND DRILL", duration:"10 min", area:"Full field", description:"5v5. Coach blows whistle — immediately 3 seconds of all-out counter attack. After 3 seconds, whistle again — possession game resumes.", coachingPoints:["Instant response to whistle","All attackers move on whistle","After 3 seconds: calm down, hold possession"] },
          { name:"WHO GOES FORWARD?", duration:"10 min", area:"Full field", description:"Walk through: when ball is won by each position, who goes forward? Defender wins: midfielder + striker. Midfielder wins: striker + one midfielder. Striker wins: stays, midfielder supports.", coachingPoints:["Everyone must know their transition role","No one waits — those designated run","Those holding: hold smart — support and cover"] },
          { name:"TRANSITION TOURNAMENT", duration:"15 min", area:"Full field 7v7", description:"3 teams. 2 play, 1 rests. When a team wins ball, immediately counter. If they score: team that conceded is replaced. Continuous transitions.", coachingPoints:["Never switch off — transition happens every moment","Energy and explosiveness required","Strategic transition vs careless transition"], commonErrors:[{ error:"All 7 players rush forward — no cover", fix:"2 stay. 5 can go. Never leave zero defenders." },{ error:"Counter starts but player at back delays", fix:'"Be ready before you win the ball. Anticipate the win."' }] },
          { name:"TRANSITION MASTERY GAME", duration:"20 min", area:"Full field 7v7", description:"Points: 3 for goals from 3-second transitions, 1 for normal goals.", coachingPoints:["The best attacks come from fast transitions","Composure AND speed — not just speed","Read: is transition available? If yes — sprint. If no — hold."], keyLesson:"The 3 seconds after winning the ball are the most dangerous seconds in soccer. Use them." },
          { name:"RESTRAINT vs COUNTER GAME", duration:"15 min", area:"Full field 7v7", description:"Coach randomly calls 'HOLD' or 'COUNTER' as team wins ball. Team must immediately execute the right response.", coachingPoints:["Both options require instant decision","Wrong response in game = wasted opportunity","Trust the coach's reading — and your own"] },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open game. Players manage their own transitions.", coachingPoints:["Complete freedom — show us what you know","Count 3-second transition goals","End session energy should be high"], matchChallenge:["Score from a 3-second transition","Defender: Win ball and release in 1 touch once","Team: Flood forward simultaneously on one transition"] },
        ],
        nextWeek:"Session 2 covers THE FAST BREAK — speed, decision, finish in full transition.",
      },
      {
        session: 2, title: "THE FAST BREAK", subtitle: "Speed, decision, and finish in transition",
        objectives: { technical:["Ball carrying at top speed","Passing while sprinting","Finishing at pace after fast break"], tactical:["Fast break decision tree","When to shoot vs pass in fast break","Supporting the ball carrier in fast break"], physical:["Sustained sprinting with ball","Anaerobic fast-break effort","Recovery after fast break"], mental:["Composure at high speed","Decision-making while running at pace","Finishing mentality when breathless"] },
        vocabulary: [{ word:"Fast Break", def:"Full-speed counter attack — maximum urgency." },{ word:"Numbers Up", def:"Attackers outnumber defenders — exploit immediately." },{ word:"Shoot Early", def:"If GK is off line or defender is sliding — shoot immediately." },{ word:"Second Phase", def:"If fast break is stopped — reorganize for second attack." }],
        activities: [
          { name:"SPRINT + FINISH WARMUP", duration:"10 min", area:"Full field", description:"Player sprints from halfway. Receives ball at edge of box on the run. Must shoot first or second touch. GK included. All players rotate.", coachingPoints:["Arrive at pace","Shot must be driven — no slowing to shoot","Pick corner before receiving"] },
          { name:"2v1 FAST BREAK", duration:"10 min", area:"Full length 30 wide", description:"2 attackers vs 1 defender. Must score within 5 seconds. Work through: pass and support, carry and pass late, dummy and shoot.", coachingPoints:["2v1: carrier takes defender, partner goes to back post","Pass only if defender commits to you","If clear shot — take it. Don't over-pass."] },
          { name:"FAST BREAK CIRCUIT", duration:"15 min", area:"Full field", description:"Four groups at each corner. Group A counter-attacks Group B's goal. Group C counter-attacks Group D's goal simultaneously. 8 seconds to score. Non-stop.", coachingPoints:["Maximum energy and pace","Clean execution under fatigue","Shoot early — tired players often over-think"], progression:"Reduce to 6 seconds maximum" },
          { name:"FAST BREAK CHAMPIONSHIP", duration:"20 min", area:"Full field 7v7", description:"3-second window returns. Teams earn 3 points for fast break goals. All players must sprint in transition.", coachingPoints:["Fast breaks at end of game when tired are the hardest","Train for that exact moment","The team that keeps going wins late"], keyLesson:"The fast break is the ultimate test: speed, skill, and composure at the same time." },
          { name:"FAST BREAK vs LOW BLOCK", duration:"15 min", area:"Full field 7v7", description:"One team fast-breaks. Other team defends with low block. Both executing their systems from Weeks 16 and 17.", coachingPoints:["Fast break can beat low block — but only if disciplined","Low block can stop fast break — but only if compact","Which system wins depends on execution quality"] },
          { name:"WEEK CLOSE GAME", duration:"20 min", area:"Full field 7v7", description:"Open game. Apply everything from weeks 7, 16, and 17 — the transition trilogy.", coachingPoints:["Transition mastery is a season-long identity","Our team wins and loses the ball — we respond correctly both ways","3 weeks remain — what's our statement game?"], matchChallenge:["Score a fast break goal","Prevent one fast break with disciplined block","Team: Execute both a counter and a block in the same game"] },
        ],
        nextWeek:"Week 18 is FULL 2-3-1 INTEGRATION — all concepts in one full game model.",
      },
    ],
  },
  // WEEK 18
  {
    week: 18, theme: "Full 2-3-1 Integration", focus: "All Concepts in One Game Model", color: "#2980b9",
    sessions: [
      {
        session: 1, title: "FULL MODEL REHEARSAL", subtitle: "All 20 weeks combined in one session",
        objectives: { technical:["All technical skills applied contextually","Position-specific mastery","Technical execution under match pressure"], tactical:["Full 2-3-1 model execution","Recognize and apply correct tactical response","Read the game — apply the right tool"], physical:["Match fitness and endurance","High intensity with quality","Full effort level"], mental:["Confidence in the full system","Game reading maturity","Team cohesion and communication"] },
        vocabulary: [{ word:"The Model", def:"Our complete playing philosophy — attack and defend with purpose." },{ word:"Read and React", def:"Recognize the situation — apply the correct response." },{ word:"Trust the System", def:"The system works — execute it with belief." },{ word:"Play Our Way", def:"Regardless of opponent — we impose our style." }],
        activities: [
          { name:"SEASON WARMUP CIRCUIT", duration:"10 min", area:"Full field", description:"Stations representing each major theme: ball mastery (Week 1), rondo (Weeks 1–3), overlap combination (Week 3), pressing trigger (Week 12), through pass (Week 13). Rotate every 90 seconds.", coachingPoints:["Revival of every skill","Confidence in familiar exercises","Quality not just completion"] },
          { name:"MODEL WALKTHROUGH", duration:"10 min", area:"Full field", description:"Slow-speed walkthrough of the full game model: build from back → midfield control → attack wide or through → press trigger when ball lost → defend compact → counter when ball won.", coachingPoints:["It all connects","One system — many tools","Recognize the moment — apply the tool"] },
          { name:"CONTROLLED SCRIMMAGE WITH CONDITIONS", duration:"15 min", area:"Full field 7v7", description:"Normal game but coach calls conditions every 3 minutes: 'Pattern A!', 'High press!', 'Low block!', 'Tiki-taka!', 'Build from back!'. Teams must switch immediately.", coachingPoints:["Flexibility between systems","Instant adaptation","Communication within team when condition changes"], freezeMoment:"Freeze mid-game. Ask players: 'What should we be doing right now? Read the scoreline, the time, the opponent's shape.' Players decide the approach." },
          { name:"FREE FULL GAME", duration:"20 min", area:"Full field 7v7", description:"No coaching conditions. Players apply everything themselves. Coach observes only.", coachingPoints:["Autonomous application","Are they reading the game?","How much have they grown since Week 1?"], keyLesson:"Week 18: you now have a complete soccer education. Use all of it." },
          { name:"RECOGNITION GAME", duration:"15 min", area:"Full field 7v7", description:"Coach awards points to teams who correctly identify and apply the right tactical response to each situation.", coachingPoints:["Tactical intelligence tested","No more hand-holding — make the decision","Each player: name what you're doing before you do it"] },
          { name:"SHOWCASE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Full game. Coach selects MVP — not for goals, but for best tactical intelligence.", coachingPoints:["Celebrate the smart player","Goals are the product — intelligence is the process","Week 18 of 20 — almost there"], matchChallenge:["Team: Use 5 different tactical tools from the season in one game","Score a pattern play goal","Stop a counter with an organized low block"] },
        ],
        nextWeek:"Session 2 is a CHAMPIONSHIP-STYLE SCRIMMAGE — full match conditions.",
      },
      {
        session: 2, title: "FULL MATCH CONDITIONS", subtitle: "Championship-style scrimmage",
        objectives: { technical:["Match-level technical execution","Performing under competitive pressure","Consistency throughout a full match"], tactical:["Full match tactical application","In-game adaptations","Reading opponent's system and adjusting"], physical:["Full match physical output","Managing energy intelligently","Performing at the end of a hard week"], mental:["Competition mentality","Composure under pressure","Win with class, lose with dignity"] },
        vocabulary: [{ word:"Game Day", def:"Full effort, full focus — every session is game day." },{ word:"Adapt", def:"Read the opponent and adjust your plan." },{ word:"Character", def:"What you do when things go wrong shows your character." },{ word:"Process", def:"Focus on how we play — the results will follow." }],
        activities: [
          { name:"PRE-MATCH TEAM TALK", duration:"10 min", area:"Circle", description:"Players gather. Coach asks: 'What are our 3 principles for today?' Players must name them. Then players set their own individual target for the session.", coachingPoints:["Players lead the pre-match","Individual ownership of targets","Team energy and readiness"] },
          { name:"STRUCTURED WARMUP BY PLAYERS", duration:"10 min", area:"Full field", description:"Players lead their own warmup. Coach observes. No instructions.", coachingPoints:["Leadership emerging","Players have owned 18 weeks of knowledge","Pride in preparation"] },
          { name:"CHAMPIONSHIP HALF 1", duration:"20 min", area:"Full field 7v7", description:"First half of championship game. Referee (coach) full rules. Scoreline kept.", coachingPoints:["Play the game","No stopping for coaching","Observe everything"] },
          { name:"HALF-TIME TEAM TALK", duration:"5 min", area:"Circle", description:"Players lead half-time discussion. What's working? What needs fixing? Coach only speaks if asked.", coachingPoints:["Players are the coaches now","Tactical adjustments from within the team","Leadership moment"], keyLesson:"The best coaches are players who lead themselves. You are becoming those players." },
          { name:"CHAMPIONSHIP HALF 2", duration:"20 min", area:"Full field 7v7", description:"Second half. Adjustments from half-time talk applied.", coachingPoints:["Did they implement their own adjustments?","Monitor quality of player-led decisions","Celebrate smart changes that worked"] },
          { name:"POST-MATCH DEBRIEF", duration:"5 min", area:"Circle", description:"Players share one highlight and one improvement. Coach announces Week 18 MVP — best tactical performance.", coachingPoints:["Reflection is learning","Honest self-assessment","2 weeks to go — what's our season goal?"], matchChallenge:["Win the game as a team","Apply at least 3 tactical systems during match","Post-match: every player names one thing they're proud of"] },
        ],
        nextWeek:"Week 19 develops GAME INTELLIGENCE — reading the game and situational decision-making.",
      },
    ],
  },
  // WEEK 19
  {
    week: 19, theme: "Game Intelligence", focus: "Reading the Game & Decision Making", color: "#8e44ad",
    sessions: [
      {
        session: 1, title: "READING THE GAME", subtitle: "When to hold, when to press, when to attack",
        objectives: { technical:["Technical execution in ambiguous situations","Read and execute simultaneously","Adapt technique to moment"], tactical:["Game reading at multiple levels","Score, time, space, opponent positioning","Decision making tree for live game"], physical:["Smart energy management","Sprint when it matters most","Composure physically under pressure"], mental:["Calm analytical mind mid-game","Trust your read","Lead through game intelligence"] },
        vocabulary: [{ word:"Situational Awareness", def:"Know the score, the time, the space, the opponent position." },{ word:"Problem Solver", def:"A player who finds solutions the opposition hasn't planned for." },{ word:"Exploit", def:"When you see a weakness — attack it immediately." },{ word:"Manage", def:"Control the game calmly to protect an advantage." }],
        activities: [
          { name:"GAME SITUATION WARMUP", duration:"10 min", area:"20 x 20", description:"Rondo 5v2. Coach gives game situations: 'You're winning by 1, 2 minutes left.' 'You're losing — need a goal.' 'Tied game.' Players must adjust passing style to situation.", coachingPoints:["Urgency changes with situation","Same drill — different mindset","Communication of situation within team"] },
          { name:"THE DECISION TREE", duration:"10 min", area:"Full field", description:"Walk through with ball: player receives ball. Ask: Are we winning? Is there space? Is there time? Coach freezes at each decision and players call the answer and the correct action.", coachingPoints:["Check score, time, space in that order","Answer each check: yes/no","Action follows the answer — automatically"] },
          { name:"SITUATIONAL FREEZE GAME", duration:"15 min", area:"Full field 7v7", description:"Normal game. Coach freezes at key moments and asks: 'What's the score? 2 minutes left? What should we do?' Team must answer correctly and resume executing.", coachingPoints:["Every player must know score and approx time","Reading space is constant","Knowing the answer is different from executing it — do both"], commonErrors:[{ error:"Players don't know the score mid-game", fix:"Habit: every player knows score at all times. Start now." },{ error:"Correct read but wrong execution", fix:"You know WHAT — now practice HOW. That's your target today." }] },
          { name:"GAME INTELLIGENCE TOURNAMENT", duration:"20 min", area:"Full field 7v7", description:"3 teams. Points for correct tactical responses to each situation as coach calls them. Wrong response = point to opponent.", coachingPoints:["Competitive game intelligence","Under pressure — do you still read correctly?","Pride in knowing the game"], keyLesson:"The most intelligent player on the field controls the game — not necessarily the fastest or the strongest." },
          { name:"ADAPTABILITY GAME", duration:"15 min", area:"Full field 7v7", description:"Coach changes rules every 3 minutes without warning. Teams must adapt instantly.", coachingPoints:["Adaptable teams beat rigid teams","Read the new situation quickly","Communicate the change to teammates immediately"] },
          { name:"FREE SCRIMMAGE", duration:"20 min", area:"Full field 7v7", description:"Open game. No coaching. Players apply game intelligence.", coachingPoints:["Observe: who leads when coach is silent?","Who reads the game best?","Award the Game IQ Trophy to the session's most intelligent player"], matchChallenge:["Name 3 tactical adjustments you made this game and why","Read the score correctly and adjust once","Lead a teammate's decision with communication — not example"] },
        ],
        nextWeek:"Session 2 covers LATE GAME SITUATIONS — winning, losing, and drawing with 5 minutes left.",
      },
      {
        session: 2, title: "LATE GAME SITUATIONS", subtitle: "Managing the game in the final minutes",
        objectives: { technical:["Execution under maximum pressure","Technical composure late in game","Set pieces in late game"], tactical:["Winning: protect or attack?","Losing: risk or patience?","Drawing: do we need to win?"], physical:["Late-game fitness","Managing tired legs with intelligence","Final-minute sprints"], mental:["Character in adversity","Concentration when winning is within reach","Belief when behind late in game"] },
        vocabulary: [{ word:"Protect", def:"When winning — defend your advantage." },{ word:"Risk", def:"When losing late — sometimes push everyone forward." },{ word:"Seconds Matter", def:"Every second of composure late in a game is earned." },{ word:"Never Give Up", def:"Until the final whistle — anything is possible." }],
        activities: [
          { name:"LATE GAME SCENARIOS WARMUP", duration:"10 min", area:"Full field", description:"4 scenarios introduced: (1) Winning 1-0 with 5 min left, (2) Losing 0-1 with 5 min left, (3) Drawing 0-0 final 5 minutes, (4) Winning 2-0 with 10 min left. Players discuss correct approach for each.", coachingPoints:["4 scenarios = 4 different approaches","Not all winning situations need same approach","Discuss — then practice"] },
          { name:"PROTECT THE LEAD", duration:"10 min", area:"Full field 7v7", description:"One team given 2-0 lead. Must hold for 5 minutes against full press. Count how many teams hold it each rotation.", coachingPoints:["Calm possession","Don't chase a third — protect the two","GK distribution: safe, not risky when winning"] },
          { name:"COMEBACK GAME", duration:"15 min", area:"Full field 7v7", description:"Team starts 2-0 down. Must score twice in 8 minutes. Allowed to push everyone forward.", coachingPoints:["Urgency without panic","All attacking — who holds shape?","Set piece extra importance now — every one is precious"], commonErrors:[{ error:"Panic when losing — random long balls", fix:"Even under pressure — use your patterns. Pattern B in 8 minutes is a goal." },{ error:"Giving up when draw seems enough", fix:"If you need to win — go for it. Half-efforts win nothing." }] },
          { name:"LIVE SCENARIO GAME", duration:"20 min", area:"Full field 7v7", description:"Coach changes score and time every 2 minutes: 'Score is 1-0, 3 minutes left.' 'Score is now 1-1, 6 minutes left.' Teams must instantly adjust approach.", coachingPoints:["Instant adjustment","Communication of new scenario within team","No confusion — everyone knows the plan"], keyLesson:"How you play the last 5 minutes says more about your character than anything else." },
          { name:"THE FINAL MATCH", duration:"25 min", area:"Full field 7v7", description:"Full game with changing live scenarios announced each 5 minutes. Teams must manage every situation correctly.", coachingPoints:["Week 19 complete","Game intelligence fully tested","Pride in the maturity shown by these players"] },
          { name:"PRE-WEEK 20 CIRCLE", duration:"5 min", area:"Circle", description:"Team gathers. Coach asks: 'What have we learned in 19 weeks? What are you most proud of? What do you want to show in our final week?'", coachingPoints:["Reflection and anticipation","Pride in the journey","Final week energy — build it now"], matchChallenge:["Win a late game scenario correctly once","Score a comeback goal when losing","Name your single proudest moment from the season"] },
        ],
        nextWeek:"Week 20 is our SEASON REVIEW & CELEBRATION — the final chapter of this program.",
      },
    ],
  },
  // WEEK 20
  {
    week: 20, theme: "Season Review & Celebration", focus: "Player Reflection, Awards & Future Goals", color: "#f1c40f",
    sessions: [
      {
        session: 1, title: "SEASON REVIEW", subtitle: "What did we learn? What made us great?",
        objectives: { technical:["Showcase every technical skill learned","Demonstrate growth since Week 1","Perform with confidence"], tactical:["Apply any tactical concept freely","Show tactical intelligence","Lead others through the game"], physical:["Play freely and joyfully","Energy of celebration","Pride in fitness built"], mental:["Pride and reflection","Gratitude for teammates and coaches","Confidence for next season"] },
        vocabulary: [{ word:"Growth", def:"Every player is better today than they were 20 weeks ago." },{ word:"Character", def:"How you trained every week — that is your character." },{ word:"Legacy", def:"What you leave behind — for your teammates, your team culture." },{ word:"Next Level", def:"This is the foundation — the best is ahead of you." }],
        activities: [
          { name:"WEEK 1 REVISIT", duration:"10 min", area:"20 x 20", description:"Return to the very first activity: ball mastery circuit from Week 1, Session 1. Players go through the exact same drill they did in Week 1. Coach observes the difference.", coachingPoints:["Show them how far they've come","Same drill — different players","Touch quality, confidence, composure — all improved"], keyLesson:"The best way to see how far you've come is to do what you did when you started." },
          { name:"BEST OF THE SEASON DRILL VOTE", duration:"10 min", area:"Varies", description:"Players vote on their 3 favorite drills from the season. Top 2 voted drills are played. Players run them. Coach facilitates.", coachingPoints:["Player ownership of the program","Favorite drills reveal what they valued most","Joy in revisiting the highlights"] },
          { name:"SEASON HIGHLIGHT RONDO", duration:"15 min", area:"20 x 20", description:"Rondo to showcase every skill: one-touch, two-touch, switch, one-two, escape press. Players can call any combination during the rondo. Shows the vocabulary built.", coachingPoints:["The language of soccer is now theirs","Call combinations in the rondo by name","Celebrate the vocabulary they've earned"] },
          { name:"AWARDS CEREMONY", duration:"15 min", area:"Circle", description:"Coach presents season awards: Golden Boot, Golden Gloves, Midfield General, Defender of the Season, Most Improved, Best Communicator, Team Player Award, Coach's Award (most coachable). Players also vote for their own MVP.", coachingPoints:["Every player earns recognition","Awards celebrate different values","Create pride and identity"] },
          { name:"PLAYERS SET NEXT SEASON GOALS", duration:"10 min", area:"Circle", description:"Each player writes or states: 1 technical goal, 1 tactical goal, and 1 personal goal for next season. Coach collects to give back at start of next season.", coachingPoints:["Growth is continuous — it doesn't end here","Goal-setting is a skill in itself","Pride in knowing what you want to improve"] },
          { name:"FREE PLAY — LEGENDS GAME", duration:"20 min", area:"Full field 7v7", description:"Open game. Players can play any position. Creativity and joy are the only rules. No coaching.", coachingPoints:["Pure love of the game","No pressure — just play","This is why we do it"], matchChallenge:["Show your best move of the season","Make a teammate smile once","Play with everything you've learned — for the joy of it"] },
        ],
        nextWeek:"Session 2 is the FINAL CELEBRATION GAME. Players design their own training session.",
      },
      {
        session: 2, title: "CELEBRATION GAME", subtitle: "Players design their own final training session",
        objectives: { technical:["Pure expression of technical ability","Joy in executing well-learned skills","Freedom of play"], tactical:["Player-led tactics","Fun application of all principles","Creative tactical expression"], physical:["Full out — leave everything on the field","Celebration energy","Finish the season at 100%"], mental:["Gratitude and celebration","Confidence to lead and express","Readiness for next season"] },
        vocabulary: [{ word:"Final Whistle", def:"20 weeks complete. You are a better player and teammate." },{ word:"Foundation", def:"Everything learned is the base. Build on it forever." },{ word:"Love the Game", def:"That's why we're here — never lose that." },{ word:"See You Next Season", def:"The program never really ends — it evolves." }],
        activities: [
          { name:"PLAYERS DESIGN THE WARMUP", duration:"10 min", area:"Players choose", description:"Two players are chosen as 'Session Coaches' for the day. They design and lead the warmup. The rest follow. Coach is a player.", coachingPoints:["Leadership recognition","They know enough to coach — trust them","Coach: be a player today. Be coached by them."] },
          { name:"PLAYERS CHOOSE THEIR BEST DRILL", duration:"10 min", area:"Players choose", description:"Session coaches pick the drill they want to run from the 20-week program. They explain it. They lead it.", coachingPoints:["Coaching is teaching","Communication skills applied","Pride in leading peers"] },
          { name:"PARENTS vs PLAYERS (OPTIONAL)", duration:"15 min", area:"Full field 7v7", description:"If parents attend: 7v7 parents vs players. Players apply everything they know. Parents play for fun.", coachingPoints:["Showcase to families","Pride in what players can now do","Joy and laughter are the goal"] },
          { name:"FINAL CHAMPIONSHIP GAME", duration:"20 min", area:"Full field 7v7", description:"The final game of the 20-week program. Players organize teams themselves. They referee. They coach. They play.", coachingPoints:["Complete player autonomy","Coach watches proudly","This is the moment everything was built for"] },
          { name:"CLOSING CIRCLE — SEASON CLOSE", duration:"10 min", area:"Center circle", description:"Everyone sits in the center circle. Coach shares 3 things they're most proud of about this group. Each player shares one word that describes the season.", coachingPoints:["Words matter — 'brave', 'together', 'better'","Emotional close — it's okay to feel proud","The bond built in this season is real"] },
          { name:"SEASON CERTIFICATE & PLAYBOOK", duration:"10 min", area:"Circle", description:"Each player receives their season certificate. Coach presents a printed copy of the 20-week playbook with player's name on it. The CSA U9 Boys Select identity is complete.", coachingPoints:["Physical recognition of achievement","Something to keep forever","This is their story — they wrote it by showing up"], matchChallenge:["Enjoy every single minute","Play with everything you have","Remember why you started — and how far you've come"] },
        ],
        nextWeek:"Season complete. Begin next season's program with the foundation of these 20 weeks. Well done, CSA U9 Boys Select.",
      },
    ],
  },

]; // end allWeeks

export default function SoccerManual() {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [currentSession, setCurrentSession] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState(null);
  const [view, setView] = useState("overview");

  const week = allWeeks[currentWeek];
  const session = week?.sessions[currentSession];

  const phases = [
    { name: "FOUNDATION", weeks: "1–5", range: [0, 4] },
    { name: "DEVELOPMENT", weeks: "6–10", range: [5, 9] },
    { name: "ADVANCED", weeks: "11–15", range: [10, 14] },
    { name: "MASTERY", weeks: "16–20", range: [15, 19] },
  ];

  const currentPhase = phases.find(p => currentWeek >= p.range[0] && currentWeek <= p.range[1]);

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#0a1a0a", minHeight: "100vh", color: "#e8ede0" }}>
      <div style={{ background: "linear-gradient(135deg, #0f2a0f 0%, #1a4a1a 50%, #0f2a0f 100%)", borderBottom: "3px solid #a8e63d", padding: 0 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 20px 0" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 4, color: "#a8e63d", textTransform: "uppercase", marginBottom: 4 }}>CSA Youth Soccer</div>
              <h1 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: "#f7f9f2", letterSpacing: -1, lineHeight: 1.1 }}>CSA U9 BOYS SELECT</h1>
              <div style={{ fontSize: 12, color: "#8aad6a", marginTop: 4, letterSpacing: 2 }}>2-3-1 FORMATION · 20-WEEK PROGRESSIVE PLAYBOOK</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ background: "#a8e63d", color: "#0a1a0a", padding: "6px 14px", borderRadius: 2, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 6 }}>{currentPhase?.name} PHASE</div>
              <div style={{ fontSize: 11, color: "#6a8a5a", letterSpacing: 1 }}>WEEKS {currentPhase?.weeks}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 2, marginTop: 20 }}>
            {phases.map(p => (
              <button key={p.name} onClick={() => { setCurrentWeek(p.range[0]); setCurrentSession(0); setView("overview"); setExpandedActivity(null); }}
                style={{ flex: 1, padding: "8px 4px", background: currentPhase?.name === p.name ? "#a8e63d" : "transparent", color: currentPhase?.name === p.name ? "#0a1a0a" : "#6a8a5a", border: "none", cursor: "pointer", fontSize: 10, fontWeight: 700, letterSpacing: 2, fontFamily: "Georgia, serif", borderBottom: currentPhase?.name === p.name ? "none" : "2px solid #1a3a1a" }}>
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 20px" }}>
        {view === "overview" ? (
          <>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#6a8a5a", marginBottom: 14 }}>SELECT WEEK — {currentPhase?.name} PHASE</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
                {allWeeks.slice(currentPhase.range[0], currentPhase.range[1] + 1).map((w, i) => {
                  const wIdx = currentPhase.range[0] + i;
                  return (
                    <button key={w.week} onClick={() => { setCurrentWeek(wIdx); setView("session"); setCurrentSession(0); setExpandedActivity(null); }}
                      style={{ background: currentWeek === wIdx ? w.color : "#0f2a0f", border: `2px solid ${currentWeek === wIdx ? w.color : "#1a4a1a"}`, borderRadius: 4, padding: "14px 8px", cursor: "pointer", textAlign: "center" }}>
                      <div style={{ fontSize: 9, color: currentWeek === wIdx ? "#0a1a0a" : w.color, letterSpacing: 2, marginBottom: 4 }}>WEEK</div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: currentWeek === wIdx ? "#0a1a0a" : "#e8ede0", lineHeight: 1 }}>{w.week}</div>
                      <div style={{ fontSize: 9, color: currentWeek === wIdx ? "#0a1a0a99" : "#6a8a5a", marginTop: 6, lineHeight: 1.3 }}>{w.theme}</div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div style={{ borderTop: "1px solid #1a3a1a", paddingTop: 24 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#6a8a5a", marginBottom: 16 }}>COMPLETE 20-WEEK OVERVIEW</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {allWeeks.map((w, i) => (
                  <button key={w.week} onClick={() => { setCurrentWeek(i); setView("session"); setCurrentSession(0); setExpandedActivity(null); }}
                    style={{ background: "#0f2a0f", border: `1px solid ${i === currentWeek ? w.color : "#1a3a1a"}`, borderLeft: `4px solid ${w.color}`, borderRadius: 3, padding: "10px 12px", cursor: "pointer", textAlign: "left", display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ fontSize: 18, fontWeight: 900, color: w.color, minWidth: 26 }}>{w.week}</span>
                    <div>
                      <div style={{ fontSize: 11, color: "#e8ede0", fontWeight: 700 }}>{w.theme}</div>
                      <div style={{ fontSize: 10, color: "#6a8a5a", marginTop: 2 }}>{w.focus}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
              <button onClick={() => setView("overview")} style={{ background: "transparent", border: "1px solid #2a4a2a", color: "#6a8a5a", padding: "6px 12px", borderRadius: 3, cursor: "pointer", fontSize: 11, fontFamily: "Georgia, serif" }}>← Weeks</button>
              <div style={{ flex: 1, fontSize: 11, color: week.color, letterSpacing: 2 }}>WEEK {week.week} · {week.theme.toUpperCase()}</div>
              <div style={{ display: "flex", gap: 4 }}>
                {[0, 1].map(i => (
                  <button key={i} onClick={() => { setCurrentSession(i); setExpandedActivity(null); }}
                    style={{ background: currentSession === i ? week.color : "#0f2a0f", color: currentSession === i ? "#0a1a0a" : "#6a8a5a", border: `1px solid ${currentSession === i ? week.color : "#2a4a2a"}`, padding: "6px 14px", borderRadius: 3, cursor: "pointer", fontSize: 11, fontWeight: 700, fontFamily: "Georgia, serif" }}>
                    S{i + 1}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                <button onClick={() => { if (currentWeek > 0) { setCurrentWeek(w => w - 1); setCurrentSession(0); setExpandedActivity(null); } }} disabled={currentWeek === 0}
                  style={{ background: "#0f2a0f", border: "1px solid #2a4a2a", color: currentWeek === 0 ? "#2a4a2a" : "#6a8a5a", padding: "6px 12px", borderRadius: 3, cursor: currentWeek === 0 ? "default" : "pointer", fontSize: 13, fontFamily: "Georgia, serif" }}>‹</button>
                <button onClick={() => { if (currentWeek < 19) { setCurrentWeek(w => w + 1); setCurrentSession(0); setExpandedActivity(null); } }} disabled={currentWeek === 19}
                  style={{ background: "#0f2a0f", border: "1px solid #2a4a2a", color: currentWeek === 19 ? "#2a4a2a" : "#6a8a5a", padding: "6px 12px", borderRadius: 3, cursor: currentWeek === 19 ? "default" : "pointer", fontSize: 13, fontFamily: "Georgia, serif" }}>›</button>
              </div>
            </div>

            <div style={{ background: `linear-gradient(135deg, #0f2a0f, ${week.color}18)`, border: `2px solid ${week.color}`, borderRadius: 6, padding: "22px", marginBottom: 18 }}>
              <div style={{ fontSize: 10, color: week.color, letterSpacing: 3, marginBottom: 6 }}>WEEK {week.week} · SESSION {currentSession + 1} · 2-3-1 FORMATION · 90 MINUTES</div>
              <h2 style={{ margin: "0 0 4px", fontSize: 24, fontWeight: 900, color: "#f7f9f2", letterSpacing: -0.5 }}>{session.title}</h2>
              <div style={{ fontSize: 13, color: "#8aad6a", fontStyle: "italic" }}>{session.subtitle}</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 18 }}>
              {[{ key: "technical", label: "TECHNICAL", icon: "⚽" }, { key: "tactical", label: "TACTICAL", icon: "🗺" }, { key: "physical", label: "PHYSICAL", icon: "⚡" }, { key: "mental", label: "MENTAL", icon: "🧠" }].map(obj => (
                <div key={obj.key} style={{ background: "#0f2a0f", border: "1px solid #1a4a1a", borderRadius: 4, padding: "12px" }}>
                  <div style={{ fontSize: 9, color: week.color, letterSpacing: 3, marginBottom: 8 }}>{obj.icon} {obj.label}</div>
                  {session.objectives[obj.key].map((o, i) => (
                    <div key={i} style={{ fontSize: 12, color: "#c8d8b8", marginBottom: 3, display: "flex", gap: 6 }}>
                      <span style={{ color: week.color, flexShrink: 0 }}>·</span>{o}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div style={{ background: "#0f2a0f", border: `1px solid ${week.color}44`, borderRadius: 4, padding: "16px", marginBottom: 18 }}>
              <div style={{ fontSize: 10, color: week.color, letterSpacing: 3, marginBottom: 12 }}>ACADEMY LANGUAGE</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                {session.vocabulary.map((v, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${week.color}`, paddingLeft: 10 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#f7f9f2", marginBottom: 2 }}>{v.word}</div>
                    <div style={{ fontSize: 11, color: "#8aad6a" }}>{v.def}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#6a8a5a", marginBottom: 8 }}>SESSION PLAN · 90 MINUTES</div>
              <div style={{ display: "flex", gap: 3, height: 8, borderRadius: 4, overflow: "hidden" }}>
                {session.activities.map((a, i) => <div key={i} style={{ flex: parseInt(a.duration) || 15, background: i % 2 === 0 ? week.color : `${week.color}88` }} />)}
              </div>
              <div style={{ display: "flex", gap: 3, marginTop: 3 }}>
                {session.activities.map((a, i) => <div key={i} style={{ flex: parseInt(a.duration) || 15, fontSize: 8, color: "#4a6a4a" }}>{a.duration}</div>)}
              </div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#6a8a5a", marginBottom: 10 }}>ACTIVITIES</div>
              {session.activities.map((activity, i) => (
                <div key={i} style={{ marginBottom: 8, background: "#0a180a", border: `1px solid ${expandedActivity === i ? week.color : "#1a3a1a"}`, borderRadius: 5, overflow: "hidden" }}>
                  <button onClick={() => setExpandedActivity(expandedActivity === i ? null : i)}
                    style={{ width: "100%", background: "transparent", border: "none", padding: "14px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, textAlign: "left" }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: expandedActivity === i ? week.color : "#0f2a0f", border: `2px solid ${expandedActivity === i ? week.color : "#2a4a2a"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: expandedActivity === i ? "#0a1a0a" : week.color, fontSize: 11, fontWeight: 900 }}>{i + 1}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#e8ede0", letterSpacing: 1 }}>{activity.name}</div>
                      <div style={{ fontSize: 11, color: "#6a8a5a", marginTop: 2 }}>{activity.duration} · {activity.area}</div>
                    </div>
                    <div style={{ color: "#4a6a4a", fontSize: 14 }}>{expandedActivity === i ? "▲" : "▼"}</div>
                  </button>
                  {expandedActivity === i && (
                    <div style={{ padding: "0 16px 16px", borderTop: "1px solid #1a3a1a" }}>
                      <p style={{ color: "#c8d8b8", fontSize: 13, lineHeight: 1.7, margin: "12px 0 14px" }}>{activity.description}</p>
                      {activity.coachingPoints && (
                        <div style={{ marginBottom: 12 }}>
                          <div style={{ fontSize: 9, color: week.color, letterSpacing: 3, marginBottom: 6 }}>COACHING POINTS</div>
                          {activity.coachingPoints.map((cp, j) => <div key={j} style={{ fontSize: 12, color: "#8aad6a", marginBottom: 3, display: "flex", gap: 8 }}><span style={{ color: week.color }}>▸</span>{cp}</div>)}
                        </div>
                      )}
                      {activity.progression && (
                        <div style={{ background: "#0f2a0f", border: `1px solid ${week.color}33`, borderRadius: 3, padding: "9px 11px", marginBottom: 12 }}>
                          <span style={{ fontSize: 9, color: week.color, letterSpacing: 2 }}>PROGRESSION: </span>
                          <span style={{ fontSize: 12, color: "#c8d8b8" }}>{activity.progression}</span>
                        </div>
                      )}
                      {activity.commonErrors && (
                        <div style={{ marginBottom: 12 }}>
                          <div style={{ fontSize: 9, color: "#e84545", letterSpacing: 3, marginBottom: 6 }}>COMMON ERRORS + CORRECTIONS</div>
                          {activity.commonErrors.map((e, j) => (
                            <div key={j} style={{ display: "flex", gap: 10, marginBottom: 6, background: "#120808", border: "1px solid #3a1a1a", borderRadius: 3, padding: "8px 11px" }}>
                              <div style={{ flex: 1, fontSize: 12, color: "#e88888" }}>{e.error}</div>
                              <div style={{ flex: 1, fontSize: 12, color: "#8aad6a" }}>{e.fix}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      {activity.freezeMoment && (
                        <div style={{ background: "#080f08", border: `2px solid ${week.color}`, borderRadius: 3, padding: "11px", marginBottom: 12 }}>
                          <div style={{ fontSize: 9, color: week.color, letterSpacing: 3, marginBottom: 5 }}>❄ FREEZE MOMENT</div>
                          <div style={{ fontSize: 12, color: "#c8d8b8" }}>{activity.freezeMoment}</div>
                        </div>
                      )}
                      {activity.keyLesson && (
                        <div style={{ background: `${week.color}15`, border: `1px solid ${week.color}`, borderRadius: 3, padding: "11px", marginBottom: 12 }}>
                          <div style={{ fontSize: 9, color: week.color, letterSpacing: 3, marginBottom: 4 }}>KEY LESSON</div>
                          <div style={{ fontSize: 13, color: "#f7f9f2", fontWeight: 700, fontStyle: "italic" }}>{activity.keyLesson}</div>
                        </div>
                      )}
                      {activity.matchChallenge && (
                        <div style={{ background: "#0f1a0f", border: "1px solid #2a4a2a", borderRadius: 3, padding: "11px" }}>
                          <div style={{ fontSize: 9, color: week.color, letterSpacing: 3, marginBottom: 6 }}>MATCH CHALLENGE</div>
                          {activity.matchChallenge.map((c, j) => <div key={j} style={{ fontSize: 12, color: "#8aad6a", marginBottom: 3, display: "flex", gap: 8 }}><span style={{ color: week.color, flexShrink: 0 }}>★</span>{c}</div>)}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {session.nextWeek && (
              <div style={{ background: "#0f2a0f", border: "1px solid #1a4a1a", borderRadius: 4, padding: "14px 16px", borderLeft: `4px solid ${week.color}` }}>
                <div style={{ fontSize: 9, color: week.color, letterSpacing: 3, marginBottom: 5 }}>LOOKING AHEAD</div>
                <div style={{ fontSize: 13, color: "#8aad6a", lineHeight: 1.6 }}>{session.nextWeek}</div>
              </div>
            )}
          </>
        )}
      </div>

      <div style={{ borderTop: "1px solid #1a3a1a", padding: "14px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 10, color: "#2a4a2a", letterSpacing: 2 }}>CSA U9 BOYS SELECT · 2-3-1 FORMATION · 20 WEEKS · 40 SESSIONS · 60 HOURS</div>
      </div>
    </div>
  );
}
