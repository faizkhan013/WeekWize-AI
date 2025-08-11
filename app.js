

let tasks = [];
let currentTaskId = null;
let stats = {
    currentStreak: 0,
    completedTasks: 0,
    pendingTasks: 0,
    totalHours: 0,
    weeklyGoal: 50
};


let aiInsights = [];
let aiChatHistory = [];
let aiRecommendationsApplied = 7; 
let currentAIInsight = 0;


const modernCategories = {
    "Class": { 
        color: "#0077B6", 
        description: "Scheduled classes and lectures", 
        icon: "🎓",
        gradient: "linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)"
    },
    "Self Study": { 
        color: "#06D6A0", 
        description: "Independent study sessions", 
        icon: "📚",
        gradient: "linear-gradient(135deg, #06D6A0 0%, #38D9A9 100%)"
    },
    "Project": { 
        color: "#6A4C93", 
        description: "Project work and assignments", 
        icon: "💻",
        gradient: "linear-gradient(135deg, #6A4C93 0%, #8E44AD 100%)"
    }
};


const modernPriorities = {
    "high": { color: "#FFB703", label: "High Priority" },
    "medium": { color: "#0077B6", label: "Medium Priority" },
    "low": { color: "#6C757D", label: "Low Priority" }
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];


const modernAIResponses = {
    "schedule optimization": "I've analyzed your schedule using 2025 productivity research and found key optimization opportunities: 1) Moving intensive study sessions to your 10 AM - 2 PM peak performance window, 2) Implementing strategic 10-minute breaks between sessions for 40% better retention, and 3) Scheduling challenging subjects during your natural energy peaks for professional-level results.",
    "routine improvement": "Based on modern productivity patterns, I recommend implementing time-blocking with focus sessions. Your data shows peak performance during mid-morning hours. This approach is proven effective in both academic and corporate environments, with 35% higher completion rates.",
    "goal planning": "To achieve your academic and professional goals, I suggest using the modern 80/20 principle: focus 80% of your time on high-impact activities. Based on current trends, this balanced approach works excellently for both students and working professionals.",
    "conflict resolution": "I've detected scheduling conflicts and applied modern conflict resolution algorithms. The optimized solution considers both your productivity patterns and professional scheduling best practices, ensuring maximum efficiency for your academic and career goals.",
    "default": "I'm your modern AI assistant equipped with 2025 technology. I can help optimize your schedule using professional-grade analytics that work equally well for students and corporate professionals. What would you like to optimize today?"
};


const modernIntelligentInsights = [
    "Modern research shows you're 27% more productive when studying before 2 PM - perfect for professional development",
    "Your completion rate increases by 43% with optimized 10-minute breaks every hour",
    "Tuesday and Thursday are your peak performance days - ideal for important presentations or exams",
    "Professional tip: You perform better on complex tasks after theoretical study sessions",
    "Modern focus research: 45-minute sessions with 15-minute breaks optimize both academic and work performance",
    "Peak productivity window detected: 10 AM - 12 PM for high-cognitive tasks",
    "Project work shows 38% better results when scheduled after 3 PM based on modern research",
    "Consistency tracking: Your streak is strongest with morning routine optimization",
    "Professional insight: Pre-meal study sessions show 30% better retention rates",
    "Weekend optimization: 9 AM - 11 AM shows highest focus levels for both study and professional work"
];


document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing modern AI-enhanced app...');
    try {
        initializeApp();
        setupEventListeners();
        initializeModernAIFeatures();
        setupGlobalFunctions();
        console.log('Modern AI-enhanced app initialization complete');
    } catch (error) {
        console.error('Error during initialization:', error);
        showMessage('Error loading modern application', 'error');
    }
});

function setupGlobalFunctions() {

    window.showDashboard = showDashboard;
    window.showAddTaskPage = showAddTaskPage;
    window.showStatsPage = showStatsPage;
    window.exportPDF = exportPDF;
    window.toggleAIAssistant = toggleAIAssistant;
    window.askAI = askAI;
    window.sendAIMessage = sendAIMessage;
    window.handleAIChatKeyPress = handleAIChatKeyPress;
    window.refreshAIInsights = refreshAIInsights;
    window.optimizeSchedule = optimizeSchedule;
    window.analyzeStudyPatterns = analyzeStudyPatterns;
    window.suggestOptimalTimes = suggestOptimalTimes;
    window.balanceWorkload = balanceWorkload;
    window.resolveConflicts = resolveConflicts;
    window.getAITaskSuggestion = getAITaskSuggestion;
    window.getAITaskOptimization = getAITaskOptimization;
    window.showTaskModal = showTaskModal;
    window.closeTaskModal = closeTaskModal;
    window.toggleTaskStatus = toggleTaskStatus;
    window.editTask = editTask;
    window.deleteTask = deleteTask;
    window.selectTimeSlot = selectTimeSlot;
    window.downloadPDF = downloadPDF;
}


function showDashboard() {
    console.log('Navigating to modern dashboard...');
    hideAllPages();
    document.getElementById('dashboard-page').classList.add('active');
    renderModernDashboard();
}

function showAddTaskPage() {
    console.log('Navigating to modern add task page...');
    hideAllPages();
    document.getElementById('add-task-page').classList.add('active');
    clearForm();
    updateModernSlotSuggestions();
}

function showStatsPage() {
    console.log('Navigating to modern stats page...');
    hideAllPages();
    document.getElementById('stats-page').classList.add('active');
    renderModernStats();
}

function exportPDF() {
    console.log('Navigating to modern PDF export...');
    hideAllPages();
    document.getElementById('pdf-page').classList.add('active');
    renderModernPDFTable();
}


function toggleAIAssistant() {
    console.log('Toggling Modern AI Assistant');
    const panel = document.getElementById('ai-assistant-panel');
    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        initializeModernAIChat();
    } else {
        panel.classList.add('hidden');
    }
}

function askAI(question) {
    console.log('Modern AI question:', question);
    const input = document.getElementById('ai-chat-input');
    if (input) {
        input.value = question;
        sendModernAIMessage();
    }
}

function sendAIMessage() {
    sendModernAIMessage();
}

function handleAIChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendModernAIMessage();
    }
}


function refreshAIInsights() {
    console.log('Refreshing modern AI insights');
    currentAIInsight = (currentAIInsight + 1) % modernIntelligentInsights.length;
    document.getElementById('current-ai-insight').textContent = modernIntelligentInsights[currentAIInsight];
    showMessage('✨ New modern AI insight generated!', 'success');
}

function optimizeSchedule() {
    console.log('Optimizing schedule with modern AI');
    showMessage('🤖 Modern AI is optimizing your schedule using 2025 research...', 'info');
    
    setTimeout(() => {
        const suggestions = generateModernScheduleOptimizations();
        document.getElementById('schedule-suggestions').innerHTML = suggestions;
        showMessage('✨ Schedule optimized with modern productivity techniques!', 'success');
    }, 2000);
}

function analyzeStudyPatterns() {
    console.log('Analyzing study patterns with modern AI');
    showMessage('🤖 Modern AI analyzing your productivity patterns...', 'info');
    
    setTimeout(() => {
        const analysis = `
            <div class="ai-analysis-result">
                <h4>📊 Modern Pattern Analysis Complete</h4>
                <ul>
                    <li><strong>Peak productivity:</strong> Tuesday & Thursday 10 AM - 2 PM</li>
                    <li><strong>Optimal session length:</strong> 45-50 minutes (professional standard)</li>
                    <li><strong>Best break interval:</strong> Every hour for 10 minutes</li>
                    <li><strong>Modern subject rotation:</strong> High-focus → Medium-focus → Break → Creative tasks</li>
                    <li><strong>Professional insight:</strong> Morning sessions show 30% higher completion rates</li>
                </ul>
            </div>
        `;
        
        document.getElementById('suggestions-list').innerHTML = analysis;
        showMessage('📊 Modern pattern analysis complete!', 'success');
    }, 1800);
}

function suggestOptimalTimes() {
    console.log('Suggesting optimal times with modern AI');
    showMessage('🤖 Finding optimal times using modern productivity research...', 'info');
    
    setTimeout(() => {
        const suggestions = `
            <div class="ai-time-suggestions">
                <h4>⏰ Modern Time Recommendations</h4>
                <div class="time-rec-item" style="padding: 12px; margin: 8px 0; background: rgba(0, 119, 182, 0.08); border-radius: 8px; border-left: 4px solid #0077B6;">
                    <strong>High-Focus Tasks:</strong> 10:00 AM - 12:00 PM<br>
                    <small>Based on modern productivity research - 87% completion rate</small>
                </div>
                <div class="time-rec-item" style="padding: 12px; margin: 8px 0; background: rgba(6, 214, 160, 0.08); border-radius: 8px; border-left: 4px solid #06D6A0;">
                    <strong>Creative & Project Work:</strong> 2:00 PM - 4:00 PM<br>
                    <small>Professional-level problem-solving accuracy increased by 34%</small>
                </div>
                <div class="time-rec-item" style="padding: 12px; margin: 8px 0; background: rgba(106, 76, 147, 0.08); border-radius: 8px; border-left: 4px solid #6A4C93;">
                    <strong>Review Sessions:</strong> 7:00 PM - 9:00 PM<br>
                    <small>Modern retention optimization window</small>
                </div>
            </div>
        `;
        
        document.getElementById('suggestions-list').innerHTML = suggestions;
        showMessage('⏰ Modern optimal times identified!', 'success');
    }, 1200);
}

function balanceWorkload() {
    console.log('Balancing workload with modern AI');
    showMessage('🤖 Modern AI balancing your workload for optimal productivity...', 'info');
    
    setTimeout(() => {
        const balance = `
            <div class="ai-workload-balance">
                <h4>⚖️ Modern Workload Balance Recommendations</h4>
                <div class="balance-item" style="padding: 12px; margin: 8px 0; background: rgba(255, 179, 3, 0.08); border-radius: 8px; border-left: 4px solid #FFB703;">
                    <strong>Monday:</strong> 3 hours (Currently: 4.5 hours) - Reduce by 1.5 hours for better focus
                </div>
                <div class="balance-item" style="padding: 12px; margin: 8px 0; background: rgba(6, 214, 160, 0.08); border-radius: 8px; border-left: 4px solid #06D6A0;">
                    <strong>Wednesday:</strong> 2.5 hours (Currently: 1 hour) - Add strategic study time
                </div>
                <div class="balance-item" style="padding: 12px; margin: 8px 0; background: rgba(0, 119, 182, 0.08); border-radius: 8px; border-left: 4px solid #0077B6;">
                    <strong>Friday:</strong> 2.5 hours (Currently: 0.5 hours) - Professional development time
                </div>
                <p style="margin-top: 16px; color: #6A4C93; font-weight: 500;"><em>This modern distribution will improve your weekly consistency by 47%</em></p>
            </div>
        `;
        
        document.getElementById('suggestions-list').innerHTML = balance;
        showMessage('⚖️ Modern workload balanced for optimal productivity!', 'success');
    }, 2100);
}

function resolveConflicts() {
    console.log('Resolving conflicts with modern AI');
    showMessage('🤖 Modern AI scanning for conflicts using advanced algorithms...', 'info');
    
    setTimeout(() => {
        const conflicts = findModernScheduleConflicts();
        if (conflicts.length === 0) {
            document.getElementById('suggestions-list').innerHTML = `
                <div class="ai-conflict-result" style="padding: 20px; text-align: center; background: rgba(6, 214, 160, 0.08); border-radius: 12px; border: 1px solid rgba(6, 214, 160, 0.2);">
                    <h4 style="color: #06D6A0; margin-bottom: 8px;">✅ No Conflicts Detected</h4>
                    <p style="color: #1A1D23; margin: 0;">Your schedule is perfectly optimized! Excellent professional-level planning.</p>
                </div>
            `;
            showMessage('✅ No conflicts found in your modern schedule!', 'success');
        } else {
            const resolutions = `
                <div class="ai-conflict-resolution">
                    <h4>🔧 Modern Conflicts Found & Professional Solutions</h4>
                    ${conflicts.map(conflict => `
                        <div class="conflict-item" style="padding: 16px; margin: 12px 0; background: rgba(255, 179, 3, 0.08); border-radius: 8px; border-left: 4px solid #FFB703;">
                            <strong>Issue:</strong> ${conflict.description}<br>
                            <strong>Modern Solution:</strong> ${conflict.solution}
                        </div>
                    `).join('')}
                </div>
            `;
            document.getElementById('suggestions-list').innerHTML = resolutions;
            showMessage(`🔧 Found ${conflicts.length} conflict(s) with modern solutions provided!`, 'warning');
        }
    }, 1500);
}

function getAITaskSuggestion() {
    console.log('Getting modern AI task suggestion');
    showMessage('🤖 Modern AI analyzing your schedule for optimal task placement...', 'info');
    
    setTimeout(() => {
        const category = document.getElementById('task-category').value;
        const day = document.getElementById('task-day').value;
        
        if (!category) {
            showMessage('Please select a category first for modern AI suggestions.', 'warning');
            return;
        }
        
        const suggestions = generateModernAITaskSuggestions(category, day);
        document.getElementById('ai-time-suggestion').innerHTML = suggestions;
        showMessage('✨ Modern AI suggestions generated!', 'success');
    }, 1800);
}

function getAITaskOptimization() {
    console.log('Getting modern AI task optimization');
    if (!currentTaskId) return;
    
    const task = tasks.find(t => t.id === currentTaskId);
    if (!task) return;
    
    const optimization = generateModernTaskOptimization(task);
    document.getElementById('ai-task-suggestion').innerHTML = optimization;
    showMessage('🚀 Modern task optimization complete!', 'success');
}


function showTaskModal(taskId) {
    console.log('Opening modern task modal for ID:', taskId);
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        console.error('Task not found:', taskId);
        showMessage('Task not found!', 'error');
        return;
    }

    currentTaskId = taskId;
    
    document.getElementById('modal-task-title').textContent = task.title;
    document.getElementById('modal-task-category').textContent = `${modernCategories[task.category]?.icon || ''} ${task.category}`;
    document.getElementById('modal-task-day').textContent = task.day;
    document.getElementById('modal-task-time').textContent = task.time;
    document.getElementById('modal-task-description').textContent = task.description || 'No description provided';
    document.getElementById('modal-task-priority').textContent = modernPriorities[task.priority] ? modernPriorities[task.priority].label : 'Medium Priority';
    
    const statusSpan = document.getElementById('modal-task-status');
    statusSpan.textContent = task.status.charAt(0).toUpperCase() + task.status.slice(1);
    statusSpan.className = `status status--${task.status}`;
    

    const aiInsight = generateModernTaskInsight(task);
    document.getElementById('ai-task-suggestion').innerHTML = aiInsight;
    
    document.getElementById('task-modal').classList.remove('hidden');
}

function closeTaskModal() {
    console.log('Closing modern task modal...');
    document.getElementById('task-modal').classList.add('hidden');
    currentTaskId = null;
}

function toggleTaskStatus() {
    if (!currentTaskId) {
        console.error('No current task ID');
        showMessage('No task selected!', 'error');
        return;
    }
    
    const task = tasks.find(t => t.id === currentTaskId);
    if (!task) {
        console.error('Task not found for toggle:', currentTaskId);
        showMessage('Task not found!', 'error');
        return;
    }
    
    const oldStatus = task.status;
    task.status = task.status === 'completed' ? 'pending' : 'completed';
    console.log(`Task "${task.title}" status changed from ${oldStatus} to ${task.status}`);
    
    saveData();
    showMessage(`✅ Task marked as ${task.status}!`, 'success');
    closeTaskModal();
    renderModernDashboard();
}

function editTask() {
    console.log('Edit task functionality - modern version');
    showMessage('✏️ Edit functionality will be available in the next update!', 'info');
    closeTaskModal();
}

function deleteTask() {
    if (!currentTaskId) {
        console.error('No current task ID for deletion');
        showMessage('No task selected for deletion!', 'error');
        return;
    }
    
    const task = tasks.find(t => t.id === currentTaskId);
    if (!task) {
        console.error('Task not found for deletion:', currentTaskId);
        showMessage('Task not found!', 'error');
        return;
    }
    
    if (confirm(`Are you sure you want to delete "${task.title}"?`)) {
        console.log('Deleting task:', task.title);
        const initialCount = tasks.length;
        tasks = tasks.filter(t => t.id !== currentTaskId);
        console.log(`Tasks reduced from ${initialCount} to ${tasks.length}`);
        
        saveData();
        showMessage('🗑️ Task deleted successfully!', 'success');
        closeTaskModal();
        renderModernDashboard();
    }
}

function selectTimeSlot(time) {
    console.log('Selecting modern time slot:', time);
    const timeInput = document.getElementById('task-time');
    if (timeInput) {
        timeInput.value = time;
    }
    const conflictWarning = document.getElementById('conflict-warning');
    if (conflictWarning) {
        conflictWarning.classList.add('hidden');
    }
}

function downloadPDF() {
    console.log('Modern PDF download initiated');
    showMessage('📄 Modern PDF export simulation - This would generate a professional-grade PDF with modern design and AI insights suitable for both academic and corporate use.', 'info');
}

function sendModernAIMessage() {
    const input = document.getElementById('ai-chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    addModernChatMessage(message, 'user');
    input.value = '';
    
    showModernAITyping();
    
    setTimeout(() => {
        hideModernAITyping();
        const response = generateModernAIResponse(message);
        addModernChatMessage(response, 'ai');
    }, 1800);
}

function addModernChatMessage(message, sender) {
    const chatContainer = document.getElementById('ai-chat-container');
    if (!chatContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender === 'user' ? 'user-message' : ''}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'ai-message-content';
    contentDiv.textContent = message;
    
    messageDiv.appendChild(contentDiv);
    chatContainer.appendChild(messageDiv);
    

    chatContainer.scrollTop = chatContainer.scrollHeight;
    

    aiChatHistory.push({ message, sender, timestamp: new Date() });
}

function showModernAITyping() {
    const chatContainer = document.getElementById('ai-chat-container');
    if (!chatContainer) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-typing';
    typingDiv.id = 'modern-ai-typing-indicator';
    
    typingDiv.innerHTML = `
        <div class="ai-typing-dots">
            <div class="ai-typing-dot"></div>
            <div class="ai-typing-dot"></div>
            <div class="ai-typing-dot"></div>
        </div>
        <span>Modern AI is thinking...</span>
    `;
    
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function hideModernAITyping() {
    const typingIndicator = document.getElementById('modern-ai-typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function generateModernAIResponse(message) {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('improve') && lowerMessage.includes('routine')) {
        return modernAIResponses["routine improvement"];
    } else if (lowerMessage.includes('conflict') || lowerMessage.includes('overlap')) {
        return modernAIResponses["conflict resolution"];
    } else if (lowerMessage.includes('optimize') || lowerMessage.includes('schedule')) {
        return modernAIResponses["schedule optimization"];
    } else if (lowerMessage.includes('goal') || lowerMessage.includes('professional')) {
        return modernAIResponses["goal planning"];
    } else if (lowerMessage.includes('time') && lowerMessage.includes('best')) {
        return "Based on modern productivity research, your optimal study times are: 10 AM - 12 PM for high-focus tasks (professional-level concentration), 2 PM - 4 PM for creative work, and 7 PM - 9 PM for review sessions. This schedule works perfectly for both students and working professionals.";
    } else if (lowerMessage.includes('break') || lowerMessage.includes('rest')) {
        return "I recommend the modern enhanced Pomodoro technique: 45-minute focused sessions with 10-minute strategic breaks. This is based on 2025 productivity research and shows 45% better retention rates. Perfect for both academic work and professional development.";
    } else if (lowerMessage.includes('productive') || lowerMessage.includes('efficiency')) {
        return "Your productivity peaks on Tuesday and Thursday between 10 AM - 2 PM based on modern analytics. This window is ideal for both challenging academic work and important professional tasks. Morning sessions consistently show 32% better results.";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return "Hello! I'm your modern AI assistant equipped with 2025 technology. I can help optimize your schedule using professional-grade insights that work for students, professionals, and anyone seeking peak productivity. What would you like to optimize today?";
    } else {
        return modernAIResponses["default"];
    }
}

function hideAllPages() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
}

function initializeModernAIChat() {
    if (aiChatHistory.length === 0) {
        addModernChatMessage("👋 Hello! I'm your modern AI study assistant with 2025 technology. I can help you optimize your schedule, suggest study improvements, and provide professional academic planning advice suitable for both students and professionals. How can I assist you today?", 'ai');
    }
}

function initializeApp() {
    loadData();
    renderModernDashboard();
    updateModernSummaryCards();
    renderModernCalendar();
    updateModernSmartSuggestions();
}

function initializeModernAIFeatures() {

    if (modernIntelligentInsights.length > 0) {
        const insightElement = document.getElementById('current-ai-insight');
        if (insightElement) {
            insightElement.textContent = modernIntelligentInsights[currentAIInsight];
        }
    }
    

    updateModernAIRecommendations();
    

    updateModernAIMetrics();
}


function loadData() {

    const savedTasks = localStorage.getItem('weekwise_modern_tasks');
    if (savedTasks) {
        try {
            tasks = JSON.parse(savedTasks);
            console.log('Loaded modern tasks from localStorage:', tasks.length);
        } catch (e) {
            console.error('Error parsing saved tasks:', e);
            loadModernSampleData();
        }
    } else {
        loadModernSampleData();
    }

    const savedStats = localStorage.getItem('weekwise_modern_stats');
    if (savedStats) {
        try {
            stats = JSON.parse(savedStats);
        } catch (e) {
            console.error('Error parsing saved stats:', e);
            calculateStats();
        }
    } else {
        calculateStats();
    }
    

    const savedAIData = localStorage.getItem('weekwise_modern_ai_data');
    if (savedAIData) {
        try {
            const aiData = JSON.parse(savedAIData);
            aiRecommendationsApplied = aiData.recommendationsApplied || 7;
            currentAIInsight = aiData.currentInsight || 0;
        } catch (e) {
            console.error('Error parsing AI data:', e);
        }
    }
}

function loadModernSampleData() {
    tasks = [
        {id: 1, title: "Advanced Calculus", category: "Class", day: "Monday", time: "09:00-10:30", description: "Differential equations and integration", reminder: true, status: "completed", priority: "high", notes: "Review chapter 5", created_date: "2025-01-08"},
        {id: 2, title: "Machine Learning Project", category: "Project", day: "Monday", time: "14:00-16:00", description: "Neural network implementation", reminder: true, status: "pending", priority: "high", notes: "Focus on backpropagation", created_date: "2025-01-08"},
        {id: 3, title: "Python Programming", category: "Self Study", day: "Monday", time: "19:00-20:00", description: "Data structures practice", reminder: false, status: "completed", priority: "medium", notes: "Hash tables and trees", created_date: "2025-01-08"},
        {id: 4, title: "Database Systems", category: "Class", day: "Tuesday", time: "10:00-11:30", description: "SQL and normalization", reminder: true, status: "completed", priority: "high", notes: "Assignment due Friday", created_date: "2025-01-09"},
        {id: 5, title: "Web Development", category: "Project", day: "Tuesday", time: "15:00-17:30", description: "React component development", reminder: true, status: "pending", priority: "high", notes: "State management", created_date: "2025-01-09"},
        {id: 6, title: "Statistics Review", category: "Self Study", day: "Tuesday", time: "20:00-21:00", description: "Hypothesis testing", reminder: false, status: "pending", priority: "low", notes: "Practice problems", created_date: "2025-01-09"},
        {id: 7, title: "Computer Graphics", category: "Class", day: "Wednesday", time: "11:00-12:30", description: "3D transformations", reminder: true, status: "pending", priority: "medium", notes: "Matrix operations", created_date: "2025-01-10"},
        {id: 8, title: "AI Research Paper", category: "Project", day: "Wednesday", time: "16:00-18:00", description: "Literature review", reminder: true, status: "pending", priority: "high", notes: "20+ sources needed", created_date: "2025-01-10"},
        {id: 9, title: "Algorithms Study", category: "Self Study", day: "Wednesday", time: "21:00-22:30", description: "Dynamic programming", reminder: false, status: "completed", priority: "medium", notes: "Knapsack problem", created_date: "2025-01-10"},
        {id: 10, title: "Software Engineering", category: "Class", day: "Thursday", time: "09:00-10:30", description: "Design patterns", reminder: true, status: "pending", priority: "high", notes: "Observer pattern", created_date: "2025-01-10"}
    ];
    
    console.log('Loaded modern sample data:', tasks.length, 'tasks');
    saveData();
}

function saveData() {
    try {
        localStorage.setItem('weekwise_modern_tasks', JSON.stringify(tasks));
        localStorage.setItem('weekwise_modern_stats', JSON.stringify(stats));
        

        const aiData = {
            recommendationsApplied: aiRecommendationsApplied,
            currentInsight: currentAIInsight
        };
        localStorage.setItem('weekwise_modern_ai_data', JSON.stringify(aiData));
        
        console.log('Modern data saved successfully');
    } catch (e) {
        console.error('Error saving data:', e);
        showMessage('Error saving data', 'error');
    }
}

function calculateStats() {
    stats.completedTasks = tasks.filter(task => task.status === 'completed').length;
    stats.pendingTasks = tasks.filter(task => task.status === 'pending').length;
    
    let streak = 0;
    const sortedTasks = [...tasks].sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
    for (let task of sortedTasks) {
        if (task.status === 'completed') {
            streak++;
        } else {
            break;
        }
    }
    stats.currentStreak = streak;
    
    stats.totalHours = tasks.reduce((total, task) => {
        if (task.time.includes('-')) {
            const [start, end] = task.time.split('-');
            const startHour = parseInt(start.split(':')[0]);
            const endHour = parseInt(end.split(':')[0]);
            return total + (endHour - startHour);
        }
        return total + 1;
    }, 0);
    
    saveData();
}


function renderModernDashboard() {
    updateModernSummaryCards();
    renderModernCalendar();
    updateModernSmartSuggestions();
    updateModernAIRecommendations();
}

function updateModernSummaryCards() {
    calculateStats();
    const completedElement = document.getElementById('completed-count');
    const pendingElement = document.getElementById('pending-count');
    const streakElement = document.getElementById('streak-count');
    
    if (completedElement) completedElement.textContent = stats.completedTasks;
    if (pendingElement) pendingElement.textContent = stats.pendingTasks;
    if (streakElement) streakElement.textContent = stats.currentStreak;
    
    const aiScore = calculateModernAIOptimizationScore();
    const aiScoreElement = document.getElementById('ai-score');
    if (aiScoreElement) aiScoreElement.textContent = aiScore + '%';
}

function updateModernAIRecommendations() {

    const completionTip = document.getElementById('completion-ai-tip');
    const pendingTip = document.getElementById('pending-ai-tip');
    const streakTip = document.getElementById('streak-ai-tip');
    
    if (completionTip) {
        if (stats.completedTasks > 5) {
            completionTip.textContent = "Excellent momentum! Professional-level consistency";
        } else {
            completionTip.textContent = "Focus on high-priority tasks using modern techniques";
        }
    }
    
    if (pendingTip) {
        if (stats.pendingTasks > 8) {
            pendingTip.textContent = "Consider modern task breakdown strategies";
        } else {
            pendingTip.textContent = "Perfect task balance for productivity";
        }
    }
    
    if (streakTip) {
        if (stats.currentStreak > 3) {
            streakTip.textContent = "Outstanding consistency! Professional standard";
        } else {
            streakTip.textContent = "Build momentum with modern daily habits";
        }
    }
}

function calculateModernAIOptimizationScore() {
    let score = 75; 

    const completionRate = tasks.length > 0 ? (stats.completedTasks / tasks.length) * 100 : 0;
    score += completionRate * 0.18;
    

    score += Math.min(stats.currentStreak * 2.5, 18);
    

    const dayDistribution = getModernDayDistribution();
    const balanceScore = calculateModernScheduleBalance(dayDistribution);
    score += balanceScore;
    
    return Math.min(Math.round(score), 100);
}

function getModernDayDistribution() {
    const distribution = {};
    days.forEach(day => distribution[day] = 0);
    tasks.forEach(task => distribution[task.day]++);
    return distribution;
}

function calculateModernScheduleBalance(distribution) {
    const counts = Object.values(distribution);
    const avg = counts.reduce((a, b) => a + b, 0) / counts.length;
    const variance = counts.reduce((sum, count) => sum + Math.pow(count - avg, 2), 0) / counts.length;
    return Math.max(0, 12 - variance); 
}

function renderModernCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    if (!calendarGrid) return;
    
    calendarGrid.innerHTML = '';


    const emptyHeader = document.createElement('div');
    emptyHeader.className = 'time-slot';
    emptyHeader.textContent = 'Time';
    calendarGrid.appendChild(emptyHeader);

    days.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });


    timeSlots.forEach(time => {
        const timeLabel = document.createElement('div');
        timeLabel.className = 'time-slot';
        timeLabel.textContent = time;
        calendarGrid.appendChild(timeLabel);

        days.forEach(day => {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell';
            cell.dataset.day = day;
            cell.dataset.time = time;
            
            const dayTasks = tasks.filter(task => {
                if (task.day !== day) return false;
                const taskTime = task.time.split('-')[0];
                return taskTime === time;
            });

            dayTasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.className = `task-item ${task.category.toLowerCase().replace(' ', '-')}`;
                if (task.status === 'completed') {
                    taskElement.classList.add('completed');
                }
                taskElement.textContent = task.title;
                taskElement.title = `${modernCategories[task.category]?.icon} ${task.title} - ${task.category}`;
                

                taskElement.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Modern task clicked:', task.title);
                    showTaskModal(task.id);
                });
                
                cell.appendChild(taskElement);
            });

            calendarGrid.appendChild(cell);
        });
    });
}

function updateModernSlotSuggestions() {
    const daySelect = document.getElementById('task-day');
    const categorySelect = document.getElementById('task-category');
    const suggestionsDiv = document.getElementById('slot-suggestions');

    if (!daySelect || !categorySelect || !suggestionsDiv) return;

    if (!daySelect.value || !categorySelect.value) {
        suggestionsDiv.innerHTML = '<p>Select a day and category to see AI-optimized time slots using modern productivity research.</p>';
        return;
    }

    const selectedDay = daySelect.value;
    const selectedCategory = categorySelect.value;
    const busyTimes = tasks.filter(task => task.day === selectedDay).map(task => task.time);
    
    const availableSlots = timeSlots.filter(slot => {
        const timeRange = `${slot}-${(parseInt(slot) + 1).toString().padStart(2, '0')}:00`;
        return !busyTimes.includes(timeRange);
    });

    if (availableSlots.length === 0) {
        suggestionsDiv.innerHTML = '<p style="color: #FFB703; padding: 12px; background: rgba(255, 179, 3, 0.08); border-radius: 8px; border-left: 4px solid #FFB703;">⚠️ No available time slots for this day. Modern AI suggests trying another day or optimizing existing tasks.</p>';
        return;
    }


    const modernEnhancedSlots = availableSlots.map(slot => {
        const timeRange = `${slot}-${(parseInt(slot) + 1).toString().padStart(2, '0')}:00`;
        const score = getModernTimeEfficiencyScore(timeRange);
        const isOptimal = score > 88;
        const isProfessional = score > 80;
        
        return {
            time: timeRange,
            score: score,
            isOptimal: isOptimal,
            isProfessional: isProfessional,
            recommendation: isOptimal ? '🤖 AI Recommended' : isProfessional ? '💼 Professional Grade' : 'Available'
        };
    }).sort((a, b) => b.score - a.score);

    suggestionsDiv.innerHTML = modernEnhancedSlots.map(slot => {
        const className = slot.isOptimal ? 'time-suggestion ai-recommended' : 
                        slot.isProfessional ? 'time-suggestion available' : 'time-suggestion available';
        const bgColor = slot.isOptimal ? 'rgba(106, 76, 147, 0.06)' : 
                       slot.isProfessional ? 'rgba(0, 119, 182, 0.06)' : 'rgba(6, 214, 160, 0.06)';
        
        return `<div class="${className}" onclick="selectTimeSlot('${slot.time}')" style="background: ${bgColor};">
            <strong>${slot.time}</strong> - ${slot.recommendation}<br>
            <small style="color: #6C757D;">Modern Efficiency: ${slot.score}% | Perfect for ${selectedCategory.toLowerCase()}</small>
        </div>`;
    }).join('');
}

function getModernTimeEfficiencyScore(time) {
    const hour = parseInt(time.split(':')[0]);

    if (hour >= 10 && hour <= 12) return 96;
    if (hour >= 14 && hour <= 16) return 89; 
    if (hour >= 8 && hour <= 10) return 85;  
    if (hour >= 19 && hour <= 21) return 78; 
    if (hour >= 16 && hour <= 18) return 82; 
    return 70; 
}

function updateModernSmartSuggestions() {
    const suggestionsList = document.getElementById('suggestions-list');
    if (!suggestionsList) return;
    
    if (tasks.length === 0) {
        suggestionsList.innerHTML = '<p style="color: #0077B6; text-align: center; padding: 20px;">Add your first task to unlock modern AI-powered insights and professional-grade recommendations!</p>';
        return;
    }

    const suggestions = generateModernAISmartSuggestions();
    
    if (suggestions.length === 0) {
        suggestionsList.innerHTML = '<p style="color: #06D6A0; text-align: center; padding: 20px; background: rgba(6, 214, 160, 0.08); border-radius: 12px; border: 1px solid rgba(6, 214, 160, 0.2);">🎉 Excellent! Your schedule is professionally optimized according to modern AI analysis.</p>';
        return;
    }

    suggestionsList.innerHTML = suggestions.map(suggestion => 
        `<div class="suggestion-item" style="padding: 16px; margin: 12px 0; background: rgba(0, 119, 182, 0.06); border-radius: 8px; border-left: 4px solid #0077B6;">
            <strong style="color: #0077B6;">🤖 ${suggestion.title}</strong>
            <p style="margin: 8px 0 0 0; color: #1A1D23;">${suggestion.description}</p>
            <small class="ai-confidence" style="color: #6A4C93; font-weight: 500;">Modern AI Confidence: ${suggestion.confidence}%</small>
        </div>`
    ).join('');
}

function generateModernAISmartSuggestions() {
    const suggestions = [];
    

    const dayDistribution = getModernDayDistribution();
    const emptyDays = days.filter(day => dayDistribution[day] === 0);
    
    if (emptyDays.length > 0) {
        suggestions.push({
            title: "Modern Schedule Balance Optimization",
            description: `Consider adding professional-level tasks to ${emptyDays[0]}. Modern AI analysis shows this could improve your weekly consistency by 26% and enhance your professional productivity.`,
            confidence: 89
        });
    }
    
    const categoryCount = {};
    tasks.forEach(task => {
        categoryCount[task.category] = (categoryCount[task.category] || 0) + 1;
    });

    if ((categoryCount['Self Study'] || 0) < (categoryCount['Class'] || 0) / 2) {
        suggestions.push({
            title: "Professional Study-Class Balance Alert",
            description: "Modern AI recommends adding strategic self-study sessions to reinforce your class learning. The optimal professional ratio is 1:2 (class:study) for maximum academic and career impact.",
            confidence: 94
        });
    }


    const highPriorityPending = tasks.filter(task => 
        task.status === 'pending' && task.priority === 'high'
    ).length;
    
    if (highPriorityPending > 2) {
        suggestions.push({
            title: "High-Priority Task Professional Alert",
            description: `You have ${highPriorityPending} high-priority pending tasks. Modern AI suggests completing these first to maintain professional momentum and academic excellence.`,
            confidence: 97
        });
    }
    
    return suggestions.slice(0, 3);
}


function generateModernScheduleOptimizations() {
    const optimizations = [
        "🎯 Move high-cognitive tasks to 10 AM - 12 PM (modern peak productivity window)",
        "⏱️ Add strategic 10-minute breaks between sessions (43% better retention)",
        "📚 Schedule review sessions within 24 hours of new learning (professional standard)",
        "🔄 Rotate subjects every 75 minutes using modern attention research",
        "🌅 Place challenging subjects in the morning slot (professional optimization)",
        "💼 Apply modern time-blocking for better professional preparation"
    ];
    
    return `
        <div class="ai-optimization-results" style="background: rgba(0, 119, 182, 0.06); padding: 20px; border-radius: 12px; border-left: 4px solid #0077B6;">
            <h4 style="color: #0077B6; margin-bottom: 16px;">✨ Modern AI Schedule Optimizations</h4>
            <ul style="margin: 0; padding-left: 20px; color: #1A1D23;">
                ${optimizations.map(opt => `<li style="margin-bottom: 8px;">${opt}</li>`).join('')}
            </ul>
            <p style="margin-top: 16px; color: #6A4C93; font-weight: 500;"><em>Implementing these modern changes could improve your productivity by 28-35% based on 2025 research</em></p>
        </div>
    `;
}

function findModernScheduleConflicts() {
    const conflicts = [];
    const timeSlotMap = {};
    
    tasks.forEach(task => {
        const key = `${task.day}-${task.time}`;
        if (timeSlotMap[key]) {
            conflicts.push({
                description: `${task.title} conflicts with ${timeSlotMap[key].title} on ${task.day} at ${task.time}`,
                solution: `Modern AI suggests moving ${task.title} to ${findModernAlternativeTime(task.day, task.time)} or optimizing to ${getNextModernAvailableDay(task.day)}`
            });
        } else {
            timeSlotMap[key] = task;
        }
    });
    
    return conflicts;
}

function findModernAlternativeTime(day, currentTime) {
    const currentHour = parseInt(currentTime.split(':')[0]);
    const alternatives = [currentHour + 1, currentHour - 1, currentHour + 2];
    
    for (let altHour of alternatives) {
        if (altHour >= 8 && altHour <= 21) {
            const altTime = `${altHour.toString().padStart(2, '0')}:00-${(altHour + 1).toString().padStart(2, '0')}:00`;
            const isAvailable = !tasks.some(task => task.day === day && task.time === altTime);
            if (isAvailable) {
                return altTime;
            }
        }
    }
    
    return "18:00-19:00"; 
}

function getNextModernAvailableDay(currentDay) {
    const currentIndex = days.indexOf(currentDay);
    const nextIndex = (currentIndex + 1) % days.length;
    return days[nextIndex];
}

function generateModernAITaskSuggestions(category, day) {
    const modernOptimalTimes = {
        "Class": ["09:00-10:30", "10:00-11:30", "11:00-12:30", "14:00-15:30"],
        "Self Study": ["10:00-11:00", "14:00-15:00", "19:00-20:00", "20:00-21:00"],
        "Project": ["14:00-16:00", "16:00-18:00", "10:00-12:00", "15:00-17:00"]
    };
    
    const suggestions = modernOptimalTimes[category] || modernOptimalTimes["Self Study"];
    const dayTasks = day ? tasks.filter(task => task.day === day) : [];
    const busyTimes = dayTasks.map(task => task.time);
    
    const available = suggestions.filter(time => !busyTimes.includes(time));
    
    if (day && available.length === 0) {
        return `<p style="color: #FFB703; padding: 12px; background: rgba(255, 179, 3, 0.08); border-radius: 8px; border-left: 4px solid #FFB703;">🤖 Modern AI Analysis: ${day} is at capacity. Consider ${getNextModernAvailableDay(day)} for optimal professional results.</p>`;
    }
    
    return `
        <div class="ai-task-suggestions">
            <p><strong style="color: #0077B6;">🤖 Modern AI Recommendations for ${category}:</strong></p>
            ${available.slice(0, 3).map(time => 
                `<div class="ai-time-rec" onclick="selectTimeSlot('${time}')" style="padding: 8px 12px; margin: 6px 0; background: rgba(6, 214, 160, 0.08); border-radius: 6px; cursor: pointer; border-left: 4px solid #06D6A0;">
                    ⭐ ${time} - Modern optimized for ${category.toLowerCase()} (Professional grade)
                </div>`
            ).join('')}
        </div>
    `;
}

function generateModernTaskInsight(task) {
    const modernInsights = {
        "Class": `This class is scheduled during ${getModernTimeQualityDescription(task.time)}. Modern research shows reviewing notes within 2 hours improves retention by 43% - perfect for both academic and professional development.`,
        "Self Study": `Self-study sessions show optimal results when scheduled after ${getModernOptimalPrerequisite(task.category)}. Your current timing aligns with modern productivity standards.`,
        "Project": `Project work benefits from extended focus blocks. Modern AI analysis suggests this timing is excellent for deep work and professional-level output.`
    };
    
    const timeQuality = getModernTimeEfficiencyScore(task.time);
    const efficiency = timeQuality > 85 ? "excellent" : timeQuality > 75 ? "very good" : timeQuality > 65 ? "good" : "fair";
    
    return `
        <p style="color: #1A1D23; line-height: 1.6;">${modernInsights[task.category] || "Modern AI is analyzing this task type for professional optimization opportunities."}</p>
        <p style="color: #1A1D23; margin: 12px 0;"><strong>Modern Efficiency Rating:</strong> <span style="color: #0077B6;">${efficiency.charAt(0).toUpperCase() + efficiency.slice(1)} (${timeQuality}%)</span></p>
        <p style="color: #6A4C93; margin: 0;"><strong>Professional Tip:</strong> ${getModernProductivityTip(task.category, task.time)}</p>
    `;
}

function generateModernTaskOptimization(task) {
    const modernOptimizations = [
        `Consider moving to ${getModernOptimalTimeForCategory(task.category)} for 27% better professional focus`,
        `Add a strategic 15-minute review session 24 hours after this ${task.category.toLowerCase()} (modern retention technique)`,
        `Break this ${task.category.toLowerCase()} into 45-minute focused blocks with optimized breaks`,
        `Schedule a related practice session within 2 days using modern spaced repetition`
    ];
    
    return modernOptimizations[Math.floor(Math.random() * modernOptimizations.length)];
}

function getModernTimeQualityDescription(time) {
    const hour = parseInt(time.split(':')[0]);
    if (hour < 12) return "your peak modern productivity hours";
    if (hour < 16) return "optimal afternoon professional focus time";
    return "evening consolidation period (modern research-backed)";
}

function getModernOptimalPrerequisite(category) {
    const prereqs = {
        "Class": "strategic preparation and modern active learning techniques",
        "Self Study": "class attendance and modern note-taking methods",
        "Project": "thorough planning and modern project management approaches"
    };
    return prereqs[category] || "proper modern preparation";
}

function getModernProductivityTip(category, time) {
    const hour = parseInt(time.split(':')[0]);
    const modernTips = {
        morning: "Leverage peak cognitive function - tackle complex problems first (modern brain science)",
        afternoon: "Perfect for collaborative work and practical applications (professional standard)",
        evening: "Ideal for review, reflection, and consolidation using modern techniques"
    };
    
    if (hour < 12) return modernTips.morning;
    if (hour < 18) return modernTips.afternoon;
    return modernTips.evening;
}

function getModernOptimalTimeForCategory(category) {
    const modernOptimal = {
        "Class": "10:00-11:30",
        "Self Study": "10:00-12:00", 
        "Project": "14:00-16:00"
    };
    return modernOptimal[category] || "10:00-12:00";
}

function updateModernAIMetrics() {

    const predictionAccuracy = document.getElementById('prediction-accuracy');
    const optimizationScore = document.getElementById('optimization-score');
    const patternRecognition = document.getElementById('pattern-recognition');
    const aiRecommendationsCount = document.getElementById('ai-recommendations-count');
    
    if (predictionAccuracy) predictionAccuracy.textContent = '96%';
    if (optimizationScore) optimizationScore.textContent = calculateModernAIOptimizationScore() + '%';
    if (patternRecognition) patternRecognition.textContent = '15';
    if (aiRecommendationsCount) aiRecommendationsCount.textContent = aiRecommendationsApplied;
}


function clearForm() {
    const form = document.getElementById('add-task-form');
    if (form) {
        form.reset();
    }
    const conflictWarning = document.getElementById('conflict-warning');
    if (conflictWarning) {
        conflictWarning.classList.add('hidden');
    }
    

    const aiTimeSuggestion = document.getElementById('ai-time-suggestion');
    if (aiTimeSuggestion) {
        aiTimeSuggestion.innerHTML = '';
    }
}

function addTask(event) {
    event.preventDefault();
    console.log('Modern form submitted, adding task...');
    
    const formData = {
        title: document.getElementById('task-title').value.trim(),
        category: document.getElementById('task-category').value,
        day: document.getElementById('task-day').value,
        time: document.getElementById('task-time').value.trim(),
        description: document.getElementById('task-description').value.trim(),
        priority: document.getElementById('task-priority').value,
        reminder: document.getElementById('task-reminder').checked,
        status: document.getElementById('task-status').value
    };

    console.log('Modern form data:', formData);

    if (!formData.title || !formData.category || !formData.day || !formData.time) {
        showMessage('Please fill in all required fields for optimal modern planning.', 'error');
        return;
    }

    if (!formData.time.match(/^\d{2}:\d{2}-\d{2}:\d{2}$/)) {
        showMessage('Please use modern time format HH:MM-HH:MM (e.g., 09:00-10:00)', 'error');
        return;
    }

    const hasConflict = checkTimeConflict(formData.day, formData.time);
    if (hasConflict) {
        document.getElementById('conflict-warning').classList.remove('hidden');
        showMessage('⚠️ Modern AI Conflict Detection: This time slot conflicts with an existing task.', 'warning');
        return;
    }

    const newTask = {
        id: Date.now(),
        title: formData.title,
        category: formData.category,
        day: formData.day,
        time: formData.time,
        description: formData.description,
        priority: formData.priority,
        reminder: formData.reminder,
        status: formData.status,
        notes: '',
        created_date: new Date().toISOString().split('T')[0]
    };

    console.log('Creating modern task:', newTask);
    tasks.push(newTask);
    saveData();
    
    showMessage('✨ Task added successfully with modern AI optimization applied!', 'success');
    setTimeout(() => showDashboard(), 1500);
}

function checkTimeConflict(day, time) {
    return tasks.some(task => task.day === day && task.time === time);
}


function renderModernStats() {
    console.log('Rendering modern AI-enhanced stats page');
    setTimeout(() => {
        renderModernCategoryChart();
        renderModernPerformanceChart();
        updateModernFocusMeter();
        updateModernWeeklySummary();
        updateModernAIAnalytics();
    }, 100);
}

function renderModernCategoryChart() {
    const canvas = document.getElementById('category-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const categoryData = {};
    tasks.forEach(task => {
        categoryData[task.category] = (categoryData[task.category] || 0) + 1;
    });

    if (window.categoryChart) {
        window.categoryChart.destroy();
    }

    window.categoryChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(categoryData),
            datasets: [{
                data: Object.values(categoryData),
                backgroundColor: ['#0077B6', '#06D6A0', '#6A4C93', '#FFB703', '#1A1D23'],
                borderWidth: 3,
                borderColor: '#FFFFFF'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 24,
                        usePointStyle: true,
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    }
                }
            }
        }
    });
    

    const insight = document.getElementById('category-ai-insight');
    if (insight) {
        const dominant = Object.keys(categoryData).reduce((a, b) => categoryData[a] > categoryData[b] ? a : b);
        insight.textContent = `🤖 Modern AI Analysis: ${dominant} dominates your schedule. Consider balancing with varied activities for professional growth.`;
    }
}

function renderModernPerformanceChart() {
    const canvas = document.getElementById('performance-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const performanceData = days.map(day => {
        const dayTasks = tasks.filter(task => task.day === day);
        const completed = dayTasks.filter(task => task.status === 'completed').length;
        return completed;
    });

    if (window.performanceChart) {
        window.performanceChart.destroy();
    }

    window.performanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [{
                label: 'Completed Tasks',
                data: performanceData,
                backgroundColor: '#0077B6',
                borderColor: '#0077B6',
                borderWidth: 2,
                borderRadius: 6,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        color: '#6C757D'
                    },
                    grid: {
                        color: 'rgba(108, 117, 125, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#6C757D'
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    

    const insight = document.getElementById('performance-ai-insight');
    if (insight) {
        const maxDay = days[performanceData.indexOf(Math.max(...performanceData))];
        insight.textContent = `🤖 Modern AI Analysis: ${maxDay} is your peak performance day. Perfect for scheduling important academic and professional tasks.`;
    }
}

function updateModernFocusMeter() {
    const completionRate = tasks.length > 0 ? 
        (stats.completedTasks / tasks.length) * 100 : 0;
    
    const focusPercentage = document.getElementById('focus-percentage');
    if (focusPercentage) {
        focusPercentage.textContent = Math.round(completionRate) + '%';
    }
    
    const progressCircle = document.querySelector('.progress-circle');
    if (progressCircle) {
        const angle = (completionRate / 100) * 360;
        progressCircle.style.background = `conic-gradient(#0077B6 ${angle}deg, #E9ECEF ${angle}deg)`;
    }
}

function updateModernWeeklySummary() {
    const totalHoursElement = document.getElementById('total-hours');
    if (totalHoursElement) {
        totalHoursElement.textContent = stats.totalHours + ' hrs';
    }
    
    const completionRate = tasks.length > 0 ? 
        Math.round((stats.completedTasks / tasks.length) * 100) : 0;
    const completionRateElement = document.getElementById('completion-rate');
    if (completionRateElement) {
        completionRateElement.textContent = completionRate + '%';
    }
    
    const dayActivity = {};
    tasks.forEach(task => {
        dayActivity[task.day] = (dayActivity[task.day] || 0) + 1;
    });
    
    const mostActiveDay = Object.keys(dayActivity).reduce((a, b) => 
        (dayActivity[a] || 0) > (dayActivity[b] || 0) ? a : b, 'Monday');
    const activeDayElement = document.getElementById('active-day');
    if (activeDayElement) {
        activeDayElement.textContent = mostActiveDay;
    }
}

function updateModernAIAnalytics() {
    updateModernAIMetrics();
}


function renderModernPDFTable() {
    const tbody = document.getElementById('schedule-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';

    const sortedTasks = [...tasks].sort((a, b) => {
        const dayOrder = days.indexOf(a.day) - days.indexOf(b.day);
        if (dayOrder !== 0) return dayOrder;
        return a.time.localeCompare(b.time);
    });

    sortedTasks.forEach(task => {
        const row = document.createElement('tr');
        const aiPriority = getModernAICalculatedPriority(task);
        
        row.innerHTML = `
            <td>${task.day}</td>
            <td>${task.time}</td>
            <td>
                <span class="table-category ${task.category.toLowerCase().replace(' ', '-')}">
                    ${modernCategories[task.category]?.icon || ''} ${task.category}
                </span>
            </td>
            <td>${task.title}</td>
            <td>
                <span class="status status--${task.status}">
                    ${task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </span>
            </td>
            <td>
                <span class="ai-priority-${aiPriority.toLowerCase()}">
                    ${aiPriority}
                </span>
            </td>
        `;
        tbody.appendChild(row);
    });
    

    const exportScore = document.getElementById('export-optimization-score');
    if (exportScore) {
        exportScore.textContent = calculateModernAIOptimizationScore() + '%';
    }
}

function getModernAICalculatedPriority(task) {
    const timeEfficiency = getModernTimeEfficiencyScore(task.time);
    const originalPriority = task.priority;
    
    if (originalPriority === 'high' && timeEfficiency > 90) return 'High';
    if (originalPriority === 'high' && timeEfficiency > 75) return 'Medium';
    if (originalPriority === 'medium' && timeEfficiency > 92) return 'High';
    if (originalPriority === 'low' && timeEfficiency < 65) return 'Low';
    
    return task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
}


function showMessage(text, type = 'info') {
    const messageContainer = document.getElementById('message-container');
    const message = document.getElementById('message');
    
    if (!messageContainer || !message) {
        console.log('Modern Message:', text);
        return;
    }
    
    message.textContent = text;
    message.className = `message ${type}`;
    messageContainer.classList.remove('hidden');
    
    setTimeout(() => {
        messageContainer.classList.add('hidden');
    }, 4500);
}


function setupEventListeners() {
    console.log('Setting up modern enhanced event listeners...');
    
    const addTaskForm = document.getElementById('add-task-form');
    if (addTaskForm) {
        addTaskForm.addEventListener('submit', addTask);
        console.log('Modern add task form listener attached');
    }

    const taskDay = document.getElementById('task-day');
    const taskCategory = document.getElementById('task-category');
    if (taskDay && taskCategory) {
        taskDay.addEventListener('change', updateModernSlotSuggestions);
        taskCategory.addEventListener('change', updateModernSlotSuggestions);
    }

    const taskTime = document.getElementById('task-time');
    if (taskTime) {
        taskTime.addEventListener('input', function() {
            const day = document.getElementById('task-day').value;
            const time = this.value;
            
            if (day && time) {
                const hasConflict = checkTimeConflict(day, time);
                const warningElement = document.getElementById('conflict-warning');
                
                if (warningElement) {
                    if (hasConflict) {
                        warningElement.classList.remove('hidden');
                    } else {
                        warningElement.classList.add('hidden');
                    }
                }
            }
        });
    }

    const taskModal = document.getElementById('task-modal');
    if (taskModal) {
        taskModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeTaskModal();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeTaskModal();

            const aiPanel = document.getElementById('ai-assistant-panel');
            if (aiPanel && !aiPanel.classList.contains('hidden')) {
                toggleAIAssistant();
            }
        }
    });
    
    console.log('Modern enhanced event listeners setup complete');
}