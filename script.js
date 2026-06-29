<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Nurse App</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-gray-50 pb-24">

    <div id="page-home" class="page active-page">
        <div class="p-6 bg-white shadow-sm">
            <h1 class="text-xl font-extrabold text-gray-800">Halo, Perawat Hebat! 👋</h1>
            <p class="text-sm text-gray-500">Tetap semangat memberikan perawatan terbaik.</p>
            <input type="text" id="searchInput" onkeyup="searchFeature()" placeholder="Cari fitur..." class="w-full mt-4 p-3 bg-gray-100 rounded-2xl text-sm outline-none">
        </div>

        <div class="p-4">
            <h3 class="font-bold text-gray-800 mb-4">Fitur Unggulan</h3>
            <div id="featureGrid" class="grid grid-cols-4 gap-3 text-center">
                <div class="feature-item bg-white p-3 rounded-2xl border shadow-sm cursor-pointer"><i class="fa fa-calculator text-blue-500 mb-2"></i><p class="text-[9px] font-bold">Kalkulator</p></div>
                <div class="feature-item bg-white p-3 rounded-2xl border shadow-sm cursor-pointer"><i class="fa fa-brain text-purple-500 mb-2"></i><p class="text-[9px] font-bold">AI Diagnosa</p></div>
                <div onclick="showPage('careplan')" class="feature-item bg-white p-3 rounded-2xl border shadow-sm cursor-pointer"><i class="fa fa-file-alt text-teal-500 mb-2"></i><p class="text-[9px] font-bold">Care Plan</p></div>
                <div class="feature-item bg-white p-3 rounded-2xl border shadow-sm cursor-pointer"><i class="fa fa-book text-blue-700 mb-2"></i><p class="text-[9px] font-bold">Artikel</p></div>
                <div class="feature-item bg-white p-3 rounded-2xl border shadow-sm cursor-pointer"><i class="fa fa-book-open text-indigo-500 mb-2"></i><p class="text-[9px] font-bold">E-Book</p></div>
                <div class="feature-item bg-white p-3 rounded-2xl border shadow-sm cursor-pointer"><i class="fa fa-robot text-purple-700 mb-2"></i><p class="text-[9px] font-bold">Nurse AI</p></div>
                <div onclick="showPage('webinar')" class="feature-item bg-white p-3 rounded-2xl border shadow-sm cursor-pointer"><i class="fa fa-calendar text-blue-400 mb-2"></i><p class="text-[9px] font-bold">Webinar</p></div>
            </div>
        </div>
    </div>

    <div id="page-careplan" class="page p-6">
        <button onclick="showPage('home')" class="text-sm mb-4"><i class="fa fa-arrow-left"></i> Kembali</button>
        <h2 class="font-bold text-lg mb-4">Smart Care Plan</h2>
        <textarea id="patientData" class="w-full h-32 p-4 rounded-2xl border" placeholder="Input data klinis..."></textarea>
        <button onclick="generateAskep()" class="w-full bg-blue-600 text-white py-3 rounded-2xl mt-3 font-bold text-sm">Generate AI</button>
    </div>

    <div id="page-webinar" class="page p-6">
        <button onclick="showPage('home')" class="text-sm mb-4"><i class="fa fa-arrow-left"></i> Kembali</button>
        <h2 class="font-bold text-lg mb-4">Webinar SKP</h2>
        <div id="webinarList" class="space-y-4 text-xs">Memuat data...</div>
    </div>

    <div class="fixed bottom-0 w-full bg-white border-t p-4 flex justify-around z-50 text-gray-400">
        <div onclick="showPage('home')" class="text-blue-600 text-center cursor-pointer"><i class="fa fa-home"></i><p class="text-[9px] font-bold">Beranda</p></div>
        <div class="text-center cursor-pointer"><i class="fa fa-calculator"></i><p class="text-[9px] font-bold">Kalkulator</p></div>
        <div class="text-center cursor-pointer"><i class="fa fa-brain"></i><p class="text-[9px] font-bold">Diagnosa</p></div>
        <div class="text-center cursor-pointer"><i class="fa fa-book"></i><p class="text-[9px] font-bold">E-Book</p></div>
        <div class="text-center cursor-pointer"><i class="fa fa-user"></i><p class="text-[9px] font-bold">Profil</p></div>
    </div>

    <script src="script.js"></script>
</body>
</html>