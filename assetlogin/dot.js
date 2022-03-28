angular.module("AdminLogin", []).controller("LoginAdmin", function ($scope) {
  $scope.login = function () {
    if (
      ($scope.username === "admin" && $scope.password === "admin") ||
      //--------------------------------------------MTW------------------------------------------------------------
      ($scope.username === "8914103ZJY" && $scope.password === "8914103") || //	ACHMAD KHOIRUL ANAM
      ($scope.username === "9115226ZJY" && $scope.password === "9115226") || //	ACHMAD ULUL AZMY
      ($scope.username === "8305045JA" && $scope.password === "8305045") || //	ADE NUGROHO
      ($scope.username === "8710036JA" && $scope.password === "8710036") || //	ADEF FARIYANTO
      ($scope.username === "9018045ZJY" && $scope.password === "9018045") || //	ADHID PRADITYA
      ($scope.username === "8914121ZJY" && $scope.password === "8914121") || //	ADIMAS ADRIAN ABIMANYU
      ($scope.username === "9211179JA" && $scope.password === "9211179") || //	ADY ROGO PRIYONO
      ($scope.username === "8811120JA" && $scope.password === "8811120") || //	AFRINALDI
      ($scope.username === "9418042ZJY" && $scope.password === "9418042") || //	AFRIZAL EKA RAHMADHIKA
      ($scope.username === "9115227ZJY" && $scope.password === "9115227") || //	AGISTA RIZKY PRAMANA
      ($scope.username === "9013039ZJY" && $scope.password === "9013039") || //	AGUNG NUR CAHYANTO
      ($scope.username === "8915228ZJY" && $scope.password === "8915228") || //	AGUNG SUFRYANCHE LUDEN
      ($scope.username === "9115229ZJY" && $scope.password === "9115229") || //	AHMAD AZIZ ALQURNAIN
      ($scope.username === "8711048JA" && $scope.password === "8711048") || //	AHMAD CHOIRUZ ZAMAN
      ($scope.username === "9116151ZJY" && $scope.password === "9116151") || //	AHMAD HISYAM
      ($scope.username === "8205044JA" && $scope.password === "8205044") || //	AHMAD SETIAWAN
      ($scope.username === "8406041JA" && $scope.password === "8406041") || //	AHMAD SODIKIN
      ($scope.username === "9114224ZJY" && $scope.password === "9114224") || //	AJI PRAMUDIO
      ($scope.username === "9117255ZJY" && $scope.password === "9117255") || //	AKHMAD HABIBI MALIK ARSY
      ($scope.username === "9317257ZJY" && $scope.password === "9317257") || //	AKHMAD RIDLO IQBAL MUKAFFI
      ($scope.username === "9215129ZJY" && $scope.password === "9215129") || //	ALAM HARDIK DEWANTARA
      ($scope.username === "9215230ZJY" && $scope.password === "9215230") || //	ALDA KURNIAWAN
      ($scope.username === "8811134JA" && $scope.password === "8811134") || //	ALI SANDRA
      ($scope.username === "8911114JA" && $scope.password === "8911114") || //	ALQA NURY MUHAMMAD ADNAN W.
      ($scope.username === "8815303ZJY" && $scope.password === "8815303") || //	AMAD SUPRAYOGO
      ($scope.username === "8913037ZJY" && $scope.password === "8913037") || //	AMANU YOGA CATUR UTAMA
      ($scope.username === "9115372ZJY" && $scope.password === "9115372") || //	ANANG MURBO NUGROHO
      ($scope.username === "9215130ZJY" && $scope.password === "9215130") || //	ANDES PRADESA
      ($scope.username === "9214229ZJY" && $scope.password === "9214229") || //	ANDIKA TRIANTONO
      ($scope.username === "8911117JA" && $scope.password === "8911117") || //	ANDRIKA KURNIA PUTRA
      ($scope.username === "9016177ZJY" && $scope.password === "9016177") || //	ANDRIZKI MUHAMMAD
      ($scope.username === "9114107ZJY" && $scope.password === "9114107") || //	ANGGA NUGROHO
      ($scope.username === "9215231ZJY" && $scope.password === "9215231") || //	ANGGA SYAM PERMANA
      ($scope.username === "9116132ZJY" && $scope.password === "9116132") || //	ANGGAWA RUDRADIANTONO
      ($scope.username === "8108029JA" && $scope.password === "8108029") || //	ANGGRESTA NURADRIKNI
      ($scope.username === "8614122ZJY" && $scope.password === "8614122") || //	ANHAR ASHARI
      ($scope.username === "9016104ZJY" && $scope.password === "9016104") || //	ANJU WISATA PARDEDE
      ($scope.username === "9011190JA" && $scope.password === "9011190") || //	ANWAR GOJALI
      ($scope.username === "8305055JA" && $scope.password === "8305055") || //	ARGGO GIANTO
      ($scope.username === "9015035ZJY" && $scope.password === "9015035") || //	ARI YULIANTO
      ($scope.username === "9316136ZJY" && $scope.password === "9316136") || //	ARIEF RAHMAN
      ($scope.username === "7392233K3" && $scope.password === "7392233") || //	ARIEF SYARBINI
      ($scope.username === "6584062K3" && $scope.password === "6584062") || //	ARIEF TEGUH SUTRISNO
      ($scope.username === "8610079JA" && $scope.password === "8610079") || //	ARIF ASTOMO
      ($scope.username === "8308099JA" && $scope.password === "8308099") || //	ARIF CATUR PRASETYO
      ($scope.username === "9015232ZJY" && $scope.password === "9015232") || //	ARIF KURNIAWAN
      ($scope.username === "8505121JA" && $scope.password === "8505121") || //	ARIF SETIAWAN
      ($scope.username === "8405115JA" && $scope.password === "8405115") || //	ARIF WIBOWO
      ($scope.username === "9214222ZJY" && $scope.password === "9214222") || //	ARIO RICKY PRATAMA
      ($scope.username === "9014115ZJY" && $scope.password === "9014115") || //	ARIS FRIANTO PANI
      ($scope.username === "8811135JA" && $scope.password === "8811135") || //	ARISTO JULIAN SIREGAR
      ($scope.username === "9418034ZJY" && $scope.password === "9418034") || //	ARYATAMA WISNU WARDHANA
      ($scope.username === "7907013JA" && $scope.password === "7907013") || //	ASNAWADI HIDAYAT
      ($scope.username === "7493284K3" && $scope.password === "7493284") || //	ATENG SOBARI
      ($scope.username === "9014117ZJY" && $scope.password === "9014117") || //	AVISTYA PARADIPTA
      ($scope.username === "9115107ZJY" && $scope.password === "9115107") || //	AWANG ASMORO
      ($scope.username === "8911046JA" && $scope.password === "8911046") || //	BAGUS KOKOH SURYO ANGGORO
      ($scope.username === "9317028ZJY" && $scope.password === "9317028") || //	BAGUS SETIAWAN
      ($scope.username === "8007020JA" && $scope.password === "8007020") || //	BAROKAH SUTATRI
      ($scope.username === "9619013ZJY" && $scope.password === "9619013") || //	BILLY RUDYPRATAMA
      ($scope.username === "7392231K3" && $scope.password === "7392231") || //	BUDIYONO
      ($scope.username === "8306044JA" && $scope.password === "8306044") || //	CATUR WAHYUDI
      ($scope.username === "8610085JA" && $scope.password === "8610085") || //	CHANDRA WIDYANIPUTRI
      ($scope.username === "8107021JA" && $scope.password === "8107021") || //	DAMMORA WIBAWA PASARIBU
      ($scope.username === "8008097JA" && $scope.password === "8008097") || //	DANAN TRI YULIANTO
      ($scope.username === "9316086ZJY" && $scope.password === "9316086") || //	DEDE KURNIA
      ($scope.username === "6584375K3" && $scope.password === "6584375") || //	DEDI HERMADI
      ($scope.username === "8405122JA" && $scope.password === "8405122") || //	DEDI KRISTANTO
      ($scope.username === "8305041JA" && $scope.password === "8305041") || //	DEDI UTOMO
      ($scope.username === "8008067JA" && $scope.password === "8008067") || //	DEDY HIDAYAT
      ($scope.username === "9115158ZJY" && $scope.password === "9115158") || //	DERI DAGI WACONO
      ($scope.username === "7393330K3" && $scope.password === "7393330") || //	DEWI CAHYAWATI AE.
      ($scope.username === "8911126JA" && $scope.password === "8911126") || //	DHIAN TRISNADI SETYAWAN
      ($scope.username === "8714118ZJY" && $scope.password === "8714118") || //	DIAH WULANDARI
      ($scope.username === "9317148ZJY" && $scope.password === "9317148") || //	DIANTY RIZKI ROOSMANTY
      ($scope.username === "9519038ZJY" && $scope.password === "9519038") || //	DICKY EKA CANDRA
      ($scope.username === "9417251ZJY" && $scope.password === "9417251") || //	DIENDA ARUM PRATIWI
      ($scope.username === "9215350ZJY" && $scope.password === "9215350") || //	DODI ANDIKA
      ($scope.username === "8305047JA" && $scope.password === "8305047") || //	DODY SUWONDO
      ($scope.username === "8915304ZJY" && $scope.password === "8915304") || //	DONAL AFRIWANDI
      ($scope.username === "7292088K3" && $scope.password === "7292088") || //	DONAR PARLUHUTAN S.
      ($scope.username === "9114226ZJY" && $scope.password === "9114226") || //	DONI SAFRIYANTO
      ($scope.username === "8914119ZJY" && $scope.password === "8914119") || //	DWI AJI SULISTYANTO
      ($scope.username === "9114108ZJY" && $scope.password === "9114108") || //	DZULFIKAR AZHAR
      ($scope.username === "8205040JA" && $scope.password === "8205040") || //	EDWARD MALAU
      ($scope.username === "8811113JA" && $scope.password === "8811113") || //	EKO RIYANTO
      ($scope.username === "8506040JA" && $scope.password === "8506040") || //	EKO SUPRIYANTO
      ($scope.username === "8914104ZJY" && $scope.password === "8914104") || //	EKO WAHYU PUTRANTO
      ($scope.username === "8811049JA" && $scope.password === "8811049") || //	EKY KARTIKA NUGRAHA
      ($scope.username === "9215373ZJY" && $scope.password === "9215373") || //	ERICT ILYAS SETIAWAN
      ($scope.username === "9619039ZJY" && $scope.password === "9619039") || //	FAHMI NURFAISHAL
      ($scope.username === "8405116JA" && $scope.password === "8405116") || //	FAHRONI ARDI RAMADHAN
      ($scope.username === "9115233ZJY" && $scope.password === "9115233") || //	FAI'DIL IHSAN
      ($scope.username === "8814111ZJY" && $scope.password === "8814111") || //	FAILASOFA AFIEQ AKBAR
      ($scope.username === "9217254ZJY" && $scope.password === "9217254") || //	FAJAR LUQMANTARA
      ($scope.username === "8611045JA" && $scope.password === "8611045") || //	FALANSTYA KURNIA PUTRA
      ($scope.username === "9016231ZJY" && $scope.password === "9016231") || //	FARII FAHMIUDDIN FIKRI
      ($scope.username === "9111116JA" && $scope.password === "9111116") || //	FARIS AZHARUDDIN
      ($scope.username === "9117019ZJY" && $scope.password === "9117019") || //	FAUZAN MAHMUDI
      ($scope.username === "9115284ZJY" && $scope.password === "9115284") || //	FAUZI RUSYDA
      ($scope.username === "9115275ZJY" && $scope.password === "9115275") || //	FEBRI ADHI PUJIYANTO
      ($scope.username === "8913038ZJY" && $scope.password === "8913038") || //	FEBRI IKBAL TAWAKAL SINAGA
      ($scope.username === "9116068ZJY" && $scope.password === "9116068") || //	FERDY HARDIYANTO
      ($scope.username === "9215234ZJY" && $scope.password === "9215234") || //	FERI SETIA PUTRA
      ($scope.username === "9216101ZJY" && $scope.password === "9216101") || //	FERI SETIAWAN
      ($scope.username === "9417252ZJY" && $scope.password === "9417252") || //	FIRDHA ANGGRAINI
      ($scope.username === "8609070JA" && $scope.password === "8609070") || //	FUAD ANWAR
      ($scope.username === "8915034ZJY" && $scope.password === "8915034") || //	GARDIKA SATYA NURDIANSYAH
      ($scope.username === "9719140ZJY" && $scope.password === "9719140") || //	GEOVANNI ILHAM AKBAR SANTOSO
      ($scope.username === "9215235ZJY" && $scope.password === "9215235") || //	GIDION
      ($scope.username === "9115135ZJY" && $scope.password === "9115135") || //	GUMILANG CAHYA PRAYOGA
      ($scope.username === "8915236ZJY" && $scope.password === "8915236") || //	GUSTAF PARULIAN SINURAT
      ($scope.username === "9115237ZJY" && $scope.password === "9115237") || //	HADRATUL HENDRA
      ($scope.username === "8614123ZJY" && $scope.password === "8614123") || //	HARTININGSIH
      ($scope.username === "8811055JA" && $scope.password === "8811055") || //	HARTO YUDOTOMO
      ($scope.username === "8811043JA" && $scope.password === "8811043") || //	HASTRI NOFIAN HIDAYATULLAH
      ($scope.username === "8814109ZJY" && $scope.password === "8814109") || //	HENDI HERDIANSYAH
      ($scope.username === "8914124ZJY" && $scope.password === "8914124") || //	HENDRA GUNAWAN SUSANTO
      ($scope.username === "8305117JA" && $scope.password === "8305117") || //	HENDRA SUHARIADI
      ($scope.username === "9117259ZJY" && $scope.password === "9117259") || //	HENDRI PRIONO
      ($scope.username === "8007038JA" && $scope.password === "8007038") || //	HERMAWAN IMANSYAH
      ($scope.username === "9216078ZJY" && $scope.password === "9216078") || //	HERU BAYU SAPUTRA
      ($scope.username === "9014130ZJY" && $scope.password === "9014130") || //	HERU NUGRAHA
      ($scope.username === "9115238ZJY" && $scope.password === "9115238") || //	HERWIN JANUARDI
      ($scope.username === "9113040ZJY" && $scope.password === "9113040") || //	I DEWA GEDE WISNU PRACANDA
      ($scope.username === "8915093ZJY" && $scope.password === "8915093") || //	I KOMANG ARTHA WINADI
      ($scope.username === "9416053ZJY" && $scope.password === "9416053") || //	IHROM NUR IZZAN ANANTHA
      ($scope.username === "8105048JA" && $scope.password === "8105048") || //	IING SARIPUDIN
      ($scope.username === "9417258ZJY" && $scope.password === "9417258") || //	IKHSAN MUHAMMAD ROHMAN
      ($scope.username === "8610102JA" && $scope.password === "8610102") || //	IMAN FIRMANSYAH
      ($scope.username === "8813044ZJY" && $scope.password === "8813044") || //	INDRAS WATI
      ($scope.username === "8711133JA" && $scope.password === "8711133") || //	IRPAN RUDIANSAH
      ($scope.username === "7293124K3" && $scope.password === "7293124") || //	IRSAM ADHAROMI
      ($scope.username === "8305046JA" && $scope.password === "8305046") || //	JAMINGAN SAID
      ($scope.username === "9114225ZJY" && $scope.password === "9114225") || //	JANRI TUA SIAHAAN
      ($scope.username === "8815127ZJY" && $scope.password === "8815127") || //	JATMIKO ARIF WIBOWO
      ($scope.username === "8814120ZJY" && $scope.password === "8814120") || //	JHON ACRIDMA
      ($scope.username === "8610083JA" && $scope.password === "8610083") || //	JIMMY PERIANTO SITUMORANG
      ($scope.username === "9215305ZJY" && $scope.password === "9215305") || //	JOSIA PERDAMENTA GINTING
      ($scope.username === "7603019JA" && $scope.password === "7603019") || //	JUNAIDI ABDI
      ($scope.username === "8209031JA" && $scope.password === "8209031") || //	KOMANG GEDE NARA UTAMA
      ($scope.username === "7906114JA" && $scope.password === "7906114") || //	KUNJUNG SRI HERLAMBANG
      ($scope.username === "8510099JA" && $scope.password === "8510099") || //	LATIFA NOOR HAKIKI
      ($scope.username === "8405049JA" && $scope.password === "8405049") || //	LILIK KURNIANTORO
      ($scope.username === "8007061JA" && $scope.password === "8007061") || //	LUKFIANTO
      ($scope.username === "8811111JA" && $scope.password === "8811111") || //	LUKMAN BUDIONO
      ($scope.username === "9013041ZJY" && $scope.password === "9013041") || //	M. FAIZAL HARIS
      ($scope.username === "8405123JA" && $scope.password === "8405123") || //	M. KHOLIQ RIDHO ANTARTIKA
      ($scope.username === "9014223ZJY" && $scope.password === "9014223") || //	MEGA SETYAWAN
      ($scope.username === "9215030ZJY" && $scope.password === "9215030") || //	MIRADHA HERDINI WIDIATMI
      ($scope.username === "9216153ZJY" && $scope.password === "9216153") || //	MOCH REZA ZULFAN
      ($scope.username === "0019008ZJY" && $scope.password === "0019008") || //	MOCHAMAD AGIL ANDRIAN
      ($scope.username === "8911127JA" && $scope.password === "8911127") || //	MOCHAMAD BAYU SAKTI
      ($scope.username === "8711053JA" && $scope.password === "8711053") || //	MOCHAMAD FAISHOL ARIF
      ($scope.username === "9919007ZJY" && $scope.password === "9919007") || //	MOCHAMMAD RIZAL SUHANTONO
      ($scope.username === "7292117K3" && $scope.password === "7292117") || //	MOHAMAD ALI
      ($scope.username === "8811122JA" && $scope.password === "8811122") || //	MOHAMAD IRSAN
      ($scope.username === "9316031ZJY" && $scope.password === "9316031") || //	MOHAMAD YANURI
      ($scope.username === "9318004ZJY" && $scope.password === "9318004") || //	MOHAMAT TOEFIK RIJAL
      ($scope.username === "9316032ZJY" && $scope.password === "9316032") || //	MOHAMMAD HASAN LUTFI
      ($scope.username === "9316123ZJY" && $scope.password === "9316123") || //	MOHAMMAD SAMSUDIN HAFID
      ($scope.username === "8005052JA" && $scope.password === "8005052") || //	MOHAMMAD SHOLEH
      ($scope.username === "8405125JA" && $scope.password === "8405125") || //	MU'AMAR SAFI'I
      ($scope.username === "8207014JA" && $scope.password === "8207014") || //	MUCHLISIN
      ($scope.username === "9315352ZJY" && $scope.password === "9315352") || //	MUH FERIZQO
      ($scope.username === "9011186JA" && $scope.password === "9011186") || //	MUHAMAD MURSID NUR ICHSAN
      ($scope.username === "9214110ZJY" && $scope.password === "9214110") || //	MUHAMAD ROSHIE FRIANSYAH
      ($scope.username === "8309163ZJY" && $scope.password === "8309163") || //	MUHAMMAD AMIN FAUZI
      ($scope.username === "9215374ZJY" && $scope.password === "9215374") || //	MUHAMMAD AMIR MUJAHID
      ($scope.username === "9215241ZJY" && $scope.password === "9215241") || //	MUHAMMAD DIMAS FIRDAUS
      ($scope.username === "9619040ZJY" && $scope.password === "9619040") || //	MUHAMMAD FAKHRI HADIYANTO
      ($scope.username === "9114227ZJY" && $scope.password === "9114227") || //	MUHAMMAD HAFIDZ WIRANDRYO
      ($scope.username === "8614135ZJY" && $scope.password === "8614135") || //	MUHAMMAD IRFAN
      ($scope.username === "9015132ZJY" && $scope.password === "9015132") || //	MUHAMMAD SIDDIQ B.
      ($scope.username === "8405124JA" && $scope.password === "8405124") || //	MUHAMMAD SULHAN
      ($scope.username === "8815033ZJY" && $scope.password === "8815033") || //	MUHAMMAD SYARIFUDIN
      ($scope.username === "8911119JA" && $scope.password === "8911119") || //	MUHAMMAD YUNAS AMRAN
      ($scope.username === "9115032ZJY" && $scope.password === "9115032") || //	MULYA PANCA PERJAKA
      ($scope.username === "7092137K3" && $scope.password === "7092137") || //	MUNANDAR
      ($scope.username === "8207062JA" && $scope.password === "8207062") || //	NASTOPO DARMAWAN
      ($scope.username === "8008026JA" && $scope.password === "8008026") || //	NDARU TRI HATMOKO
      ($scope.username === "9011177JA" && $scope.password === "9011177") || //	NICHOLAS WAHYUSETIO NUGROHO
      ($scope.username === "9015028ZJY" && $scope.password === "9015028") || //	NUGROHO MULYO PRAKOSO
      ($scope.username === "8814131ZJY" && $scope.password === "8814131") || //	NUGROHO NANDAR DYTO
      ($scope.username === "8505126JA" && $scope.password === "8505126") || //	NUR KHOLIQ MASRUCHI
      ($scope.username === "8711050JA" && $scope.password === "8711050") || //	OGIK KURNIAWAN
      ($scope.username === "8711052JA" && $scope.password === "8711052") || //	ONGKO SATRIYO WIBOWO
      ($scope.username === "9316099ZJY" && $scope.password === "9316099") || //	OSLO JEFFRICHO MARULI SIMANJUNTAK
      ($scope.username === "9315375ZJY" && $scope.password === "9315375") || //	PANSKINTI OKTONAEL SUMARLIN WARUWU
      ($scope.username === "9315243ZJY" && $scope.password === "9315243") || //	PINKAN DYAH BATHARI
      ($scope.username === "9014128ZJY" && $scope.password === "9014128") || //	PRIAGUNG PAMBUDI
      ($scope.username === "9216183ZJY" && $scope.password === "9216183") || //	PRICILIA DUMA LAURA SINAGA
      ($scope.username === "8609071JA" && $scope.password === "8609071") || //	PRIMA KHARISMA
      ($scope.username === "8305053JA" && $scope.password === "8305053") || //	PRIYATNO
      ($scope.username === "6993125K3" && $scope.password === "6993125") || //	PUJIYONO
      ($scope.username === "8611054JA" && $scope.password === "8611054") || //	RADIAR OKTAVIANTORO
      ($scope.username === "8711044JA" && $scope.password === "8711044") || //	RAHMAT ALQADRI
      ($scope.username === "9115244ZJY" && $scope.password === "9115244") || //	RAKEL MASUTA ISMAN
      ($scope.username === "8911125JA" && $scope.password === "8911125") || //	RANDI AZMI RIDHA
      ($scope.username === "9115096ZJY" && $scope.password === "9115096") || //	RATIH PUSPANINGTYAS
      ($scope.username === "8008028JA" && $scope.password === "8008028") || //	RATNA BUDIYANTI NURSITA DEWI
      ($scope.username === "7906073JA" && $scope.password === "7906073") || //	RATNO WIJAYA
      ($scope.username === "9919011ZJY" && $scope.password === "9919011") || //	RENDRA FAJRI AL HARIS
      ($scope.username === "9215306ZJY" && $scope.password === "9215306") || //	RENDY DWI ANGGARA PRASETIA
      ($scope.username === "8815245ZJY" && $scope.password === "8815245") || //	REZA SAVANA
      ($scope.username === "8815095ZJY" && $scope.password === "8815095") || //	RIAN DEORITA
      ($scope.username === "9319088ZJY" && $scope.password === "9319088") || //	RIANDIKA ADI PRAYOGO
      ($scope.username === "9115246ZJY" && $scope.password === "9115246") || //	RICO EKO WIBOWO
      ($scope.username === "9517077ZJY" && $scope.password === "9517077") || //	RICO MULYA SAPUTRA
      ($scope.username === "9115156ZJY" && $scope.password === "9115156") || //	RIDHO PRIMA OKTANSYAH
      ($scope.username === "8814126ZJY" && $scope.password === "8814126") || //	RIDIAN PRAWIJAYA PUTRA
      ($scope.username === "8811056JA" && $scope.password === "8811056") || //	RIEFIK ANGGIDIANSAH
      ($scope.username === "8914132ZJY" && $scope.password === "8914132") || //	RIFKY NORDIAN HAMIDI
      ($scope.username === "9215247ZJY" && $scope.password === "9215247") || //	RIFQI ARRIDHO ABID
      ($scope.username === "9418035ZJY" && $scope.password === "9418035") || //	RISWANDHA PRASDIATMAJA
      ($scope.username === "7292129K3" && $scope.password === "7292129") || //	RIYU RINDANI RIANDINI
      ($scope.username === "9214228ZJY" && $scope.password === "9214228") || //	RIZAL MOCHTYONO WIDODO
      ($scope.username === "9116179ZJY" && $scope.password === "9116179") || //	RIZKA WIDYA ARIANI
      ($scope.username === "9517256ZJY" && $scope.password === "9517256") || //	RIZKY AUGLIUS PASARIBU
      ($scope.username === "8911115JA" && $scope.password === "8911115") || //	RONI SUSANTO
      ($scope.username === "8914112ZJY" && $scope.password === "8914112") || //	RYAN PERDANA PUTRA
      ($scope.username === "8405118JA" && $scope.password === "8405118") || //	SANDY WIBOWO
      ($scope.username === "8911129JA" && $scope.password === "8911129") || //	SATRIYA SEJATI
      ($scope.username === "8410081JA" && $scope.password === "8410081") || //	SEFYAN DEDDY YULIANANTA
      ($scope.username === "9315349ZJY" && $scope.password === "9315349") || //	SETIYO MUKTI AL AMIN
      ($scope.username === "8713043ZJY" && $scope.password === "8713043") || //	SETO TRI SUGIANTO
      ($scope.username === "8611047JA" && $scope.password === "8611047") || //	SETYA BUDI
      ($scope.username === "9011184JA" && $scope.password === "9011184") || //	SHAFRUDIN NURUL IHSAN
      ($scope.username === "9415248ZJY" && $scope.password === "9415248") || //	SHOFYAN AJI UTAMA
      ($scope.username === "8914129ZJY" && $scope.password === "8914129") || //	SIGIT WISNU HABSORO
      ($scope.username === "9114106ZJY" && $scope.password === "9114106") || //	SINGGIH DWI CAHYONO
      ($scope.username === "7092096JA" && $scope.password === "7092096") || //	SJAREAT ACHDORI
      ($scope.username === "9316145ZJY" && $scope.password === "9316145") || //	STEFANI
      ($scope.username === "6892128K3" && $scope.password === "6892128") || //	SUDASLI
      ($scope.username === "8205054JA" && $scope.password === "8205054") || //	SUDIRMAN
      ($scope.username === "8815126ZJY" && $scope.password === "8815126") || //	SUGENG RAHARJA
      ($scope.username === "7393261K3" && $scope.password === "7393261") || //	SUKMA EFENDI
      ($scope.username === "7193127K3" && $scope.password === "7193127") || //	SUPRAPTO WALUYO
      ($scope.username === "8105042JA" && $scope.password === "8105042") || //	SURYANA ADI WIJAYA
      ($scope.username === "9015249ZJY" && $scope.password === "9015249") || //	SURYAWAN GITA NUGRAHA
      ($scope.username === "8305039JA" && $scope.password === "8305039") || //	SUTRISNO
      ($scope.username === "9015308ZJY" && $scope.password === "9015308") || //	SUWOKO
      ($scope.username === "8815029ZJY" && $scope.password === "8815029") || //	SYAFIUL HUDA
      ($scope.username === "9216161ZJY" && $scope.password === "9216161") || //	SYAFRI FIRMANSYAH
      ($scope.username === "7293279K3" && $scope.password === "7293279") || //	SYAIFUDIN
      ($scope.username === "9115133ZJY" && $scope.password === "9115133") || //	SYAIFUL AMIN
      ($scope.username === "9014114ZJY" && $scope.password === "9014114") || //	SYAIFUL ARIFIN
      ($scope.username === "8815250ZJY" && $scope.password === "8815250") || //	SYAIFURRIDZAL
      ($scope.username === "8205050JA" && $scope.password === "8205050") || //	TAMJID
      ($scope.username === "6793277K3" && $scope.password === "6793277") || //	TASFIN YAQZAN
      ($scope.username === "8609069JA" && $scope.password === "8609069") || //	TAUFIK HIDAYAT JOMANTARA
      ($scope.username === "8405119JA" && $scope.password === "8405119") || //	TAUFIQUROCHMAN
      ($scope.username === "7193249K3" && $scope.password === "7193249") || //	TEDI KARTEDI
      ($scope.username === "8914137ZJY" && $scope.password === "8914137") || //	TEGAR ISNAIN SULISTIANTO
      ($scope.username === "9418027ZJY" && $scope.password === "9418027") || //	TIARA VIKASARI
      ($scope.username === "9015027ZJY" && $scope.password === "9015027") || //	TITO GARRY SURYA BHIRAWA
      ($scope.username === "8914136ZJY" && $scope.password === "8914136") || //	TITO KAROSEKALI
      ($scope.username === "9216184ZJY" && $scope.password === "9216184") || //	TONI AZIZ
      ($scope.username === "9014133ZJY" && $scope.password === "9014133") || //	TONY EKA MAHENDRA
      ($scope.username === "8106014JA" && $scope.password === "8106014") || //	TOVI HARDANTO
      ($scope.username === "8914113ZJY" && $scope.password === "8914113") || //	TRI YUDHO HARIYO PAMUNGKAS
      ($scope.username === "8205043JA" && $scope.password === "8205043") || //	TRISNADIN NUGRAHA
      ($scope.username === "9315251ZJY" && $scope.password === "9315251") || //	TRYAS ADYTIA
      ($scope.username === "8105056JA" && $scope.password === "8105056") || //	TUSLAM
      ($scope.username === "8609072JA" && $scope.password === "8609072") || //	VIKANANTA DRAMASTYA
      ($scope.username === "9115094ZJY" && $scope.password === "9115094") || //	VILANTIE KARTIN
      ($scope.username === "9318038ZJY" && $scope.password === "9318038") || //	VINCENSIUS CAHYA DWINANDA
      ($scope.username === "8915131ZJY" && $scope.password === "8915131") || //	WAHYU SURYA PUTRA PRADANA
      ($scope.username === "7193203K3" && $scope.password === "7193203") || //	WAHYUDI
      ($scope.username === "8406042JA" && $scope.password === "8406042") || //	WAWAN ARIF SISWOKO
      ($scope.username === "915097ZJY" && $scope.password === "8915097") || //	WIDIANTO DWI ARI IRAWAN
      ($scope.username === "8610082JA" && $scope.password === "8610082") || //	WILLY PRASETYO ADI
      ($scope.username === "8811128JA" && $scope.password === "8811128") || //	YAN MARTIN SITUMEANG
      ($scope.username === "9015309ZJY" && $scope.password === "9015309") || //	YOAN SAPUTRA
      ($scope.username === "8406043JA" && $scope.password === "8406043") || //	YOGIK MUSTAFA
      ($scope.username === "7807018JA" && $scope.password === "7807018") || //	YOHANES PRIYO GUNO SUMAKTO
      ($scope.username === "9215252ZJY" && $scope.password === "9215252") || //	YUANDHICA ADI PRADANA
      ($scope.username === "8711051JA" && $scope.password === "8711051") || //	YUDA ARIAWAN FIRDANI
      ($scope.username === "7906083JA" && $scope.password === "7906083") || //	YUDI FIRSTIANTARA
      ($scope.username === "8714134ZJY" && $scope.password === "8714134") || //	YUDIKA FARINDRA PUTRA
      ($scope.username === "8308062JA" && $scope.password === "8308062") || //	YULI FITRIANINGRUM
      ($scope.username === "9517080ZJY" && $scope.password === "9517080") || //	YUSUF EKO ARDIANSYAH
      ($scope.username === "7806077JA" && $scope.password === "7806077") || //	ZAENAL ARIFIN
      ($scope.username === "8306046JA" && $scope.password === "8306046") || //	ZAINAL MURSIDI
      ($scope.username === "9318009ZJY" && $scope.password === "9318009") || //	ZIA ULHAQ
      ($scope.username === "9013042ZJY" && $scope.password === "9013042") || //	ZULI AGUS PRASETYO
      //------------------------------------Pensiunan--------------------------------------------------------
      ($scope.username === "5679128K3" && $scope.password === "5679128") || //	A. RACHMANSYAH
      ($scope.username === "5576149K3" && $scope.password === "5576149") || //	ACHMAD SYIFA
      ($scope.username === "6484312K3" && $scope.password === "6484312") || //	ADRI WIYONO
      ($scope.username === "5679084K3" && $scope.password === "5679084") || //	AGUS BIYANTORO
      ($scope.username === "5677154K3" && $scope.password === "5677154") || //	AGUS SUTOPO
      ($scope.username === "5780172K3" && $scope.password === "5780172") || //	AMRAN
      ($scope.username === "6892105Z" && $scope.password === "6892105") || //	B. SUDARMANTA
      ($scope.username === "6181051K3" && $scope.password === "6181051") || //	BAMBANG ARBANGUN
      ($scope.username === "5781010K3" && $scope.password === "5781010") || //	BAMBANG SUYOTO
      ($scope.username === "5679027K3" && $scope.password === "5679027") || //	BAMBANG THYONO
      ($scope.username === "6385008K3" && $scope.password === "6385008") || //	BAMBANG TRENGGONO
      ($scope.username === "5680101K3" && $scope.password === "5680101") || //	BUDIMAN
      ($scope.username === "5474044K3" && $scope.password === "5474044") || //	DIGYONO
      ($scope.username === "6385125K3" && $scope.password === "6385125") || //	DULALI
      ($scope.username === "6184476K3" && $scope.password === "6184476") || //	EDI SUDONO
      ($scope.username === "5987002JA" && $scope.password === "5987002") || //	EKO PRIYATNO KB
      ($scope.username === "6284311K3" && $scope.password === "6284311") || //	ENDANG MIQDARSAH
      ($scope.username === "5275292K3" && $scope.password === "5275292") || //	FAROUK NA
      ($scope.username === "5479005K3" && $scope.password === "5479005") || //	HARI MULYO ISWAHYUDI
      ($scope.username === "5174007K3" && $scope.password === "5174007") || //	HARYADI
      ($scope.username === "6285080K3" && $scope.password === "6285080") || //	HEDEN SIAHAAN
      ($scope.username === "5780015K3" && $scope.password === "5780015") || //	HERIKEN SUHENI
      ($scope.username === "5878161K3" && $scope.password === "5878161") || //	JON EFFENDI
      ($scope.username === "6183398K3" && $scope.password === "6183398") || //	KADIR
      ($scope.username === "5480013K3" && $scope.password === "5480013") || //	KASMAR
      ($scope.username === "6181099K3" && $scope.password === "6181099") || //	KECO KARSAI
      ($scope.username === "5174180J" && $scope.password === "5174180") || //	KRIS SUBONO
      ($scope.username === "6384183K3" && $scope.password === "6384183") || //	LINGGO UTOMO
      ($scope.username === "6282692K3" && $scope.password === "6282692") || //	M SITANGGANG
      ($scope.username === "5477149K3" && $scope.password === "5477149") || //	MACHMUD UDNG
      ($scope.username === "6188064K3" && $scope.password === "6188064") || //	MARHUSEN
      ($scope.username === "6284079K3" && $scope.password === "6284079") || //	MARIYANA
      ($scope.username === "4879018K3" && $scope.password === "4879018") || //	MIRSAL
      ($scope.username === "6384319K3" && $scope.password === "6384319") || //	MISTOPO
      ($scope.username === "6485153JA" && $scope.password === "6485153") || //	MUDJIONO
      ($scope.username === "5779097K3" && $scope.password === "5779097") || //	MUSBAR TAMZA
      ($scope.username === "8209032JA" && $scope.password === "8209032") || //	NGUDI SIGIT SRIDADIYONO
      ($scope.username === "6793155Z" && $scope.password === "6793155") || //	OCHAIRIALDI
      ($scope.username === "5579008K3" && $scope.password === "5579008") || //	OMO KARMA WIYA
      ($scope.username === "5173033K3" && $scope.password === "5173033") || //	ONO MARYADI
      ($scope.username === "5886004JA" && $scope.password === "5886004") || //	PAMINTO ADI BASUKI
      ($scope.username === "6083099JA" && $scope.password === "6083099") || //	PRANOTO
      ($scope.username === "5277316K3" && $scope.password === "5277316") || //	R. INDRA SANTOSA
      ($scope.username === "5980126K3" && $scope.password === "5980126") || //	ROCHYAT
      ($scope.username === "5680044K3" && $scope.password === "5680044") || //	RODK
      ($scope.username === "6494338K3" && $scope.password === "6494338") || //	RULY FIRMANSYAH
      ($scope.username === "6482112K3" && $scope.password === "6482112") || //	SAMINI
      ($scope.username === "6282109K3" && $scope.password === "6282109") || //	SARIMUDIN SIREGAR
      ($scope.username === "5986076K3" && $scope.password === "5986076") || //	SAROBAN
      ($scope.username === "5780043K3" && $scope.password === "5780043") || //	SARTONO
      ($scope.username === "5476004S" && $scope.password === "5476004") || //	SAYUDI UTOMO
      ($scope.username === "5376124K3" && $scope.password === "5376124") || //	SUBONO
      ($scope.username === "5881112K3" && $scope.password === "5881112") || //	SUDARTO R
      ($scope.username === "6186075K3" && $scope.password === "6186075") || //	SUDARYO
      ($scope.username === "4871015K3" && $scope.password === "4871015") || //	SULASTO
      ($scope.username === "5881108K3" && $scope.password === "5881108") || //	SUNARTO B.
      ($scope.username === "5982700K3" && $scope.password === "5982700") || //	SUNGEB
      ($scope.username === "5580025K3" && $scope.password === "5580025") || //	SUPARMAN
      ($scope.username === "5677125K3" && $scope.password === "5677125") || //	SURATMAN
      ($scope.username === "6282070JA" && $scope.password === "6282070") || //	SUYANTO KADI
      ($scope.username === "5479160K3" && $scope.password === "5479160") || //	SUYONO PUTRO
      ($scope.username === "5979028K3" && $scope.password === "5979028") || //	TEDJO LELONO
      ($scope.username === "5780011K3" && $scope.password === "5780011") || //	TRI YUNIANTO
      ($scope.username === "6081030K3" && $scope.password === "6081030") || //	TUBAGUS DADANG
      ($scope.username === "6484067K3" && $scope.password === "6484067") || //	UNTUNG DARMANTO
      ($scope.username === "6185009K3" && $scope.password === "6185009") || //	UNTUNG PRIBADI
      ($scope.username === "5579172K3" && $scope.password === "5579172") || //	UTAR SURYANA
      ($scope.username === "5882346K3" && $scope.password === "5882346") || //	WASKITO BUDI
      ($scope.username === "6185021K3" && $scope.password === "6185021") || //	YAYAN RUHYAN
      ($scope.username === "6293002Z" && $scope.password === "6293002") || //	YUSI APRIAGUNG
      ($scope.username === "6483396K3" && $scope.password === "6483396") || //	YUSMAN BUHORI
      ($scope.username === "6080042P" && $scope.password === "6080042") || //	ZAENAL ARIFIN
      ($scope.username === "5576122K3" && $scope.password === "5576122") || //	ZARFAISAL
      //----------------------------------------NON UP MTW -----------------------------------------------------
      ($scope.username === "9011118JA" && $scope.password === "9011118") || //	AAN PRASETYO AJI
      ($scope.username === "7907012JA" && $scope.password === "7907012") || //	ACEP MOI KOKONG
      ($scope.username === "6992098K3" && $scope.password === "6992098") || //	ACHMAD DJALALUDIN
      ($scope.username === "8505120JA" && $scope.password === "8505120") || //	ACHMAD SUWIGNYO
      ($scope.username === "9115128ZJY" && $scope.password === "9115128") || //	ADHI EKO APRIYANTO
      ($scope.username === "6493034Z" && $scope.password === "6493034") || //	ADI SETIAWAN
      ($scope.username === "7806013JA" && $scope.password === "7806013") || //	AGUNG PURNOMO
      ($scope.username === "6592049Z" && $scope.password === "6592049") || //	AGUS BAGYO HARTADI
      ($scope.username === "6793462K3" && $scope.password === "6793462") || //	AGUS HARYADI
      ($scope.username === "8305114JA" && $scope.password === "8305114") || //	AGUS SALIM
      ($scope.username === "8911112JA" && $scope.password === "8911112") || //	AHMAD ADIB
      ($scope.username === "9111180JA" && $scope.password === "9111180") || //	ALFI WIDHA PRIBADI
      ($scope.username === "9015031ZJY" && $scope.password === "9015031") || //	ALFIAN SULTHONI
      ($scope.username === "7599016JA" && $scope.password === "7599016") || //	AMRAN SATTU
      ($scope.username === "8006093JA" && $scope.password === "8006093") || //	ANDY WAHYU ARIANTO
      ($scope.username === "8107064JA" && $scope.password === "8107064") || //	ARI WIRAHADI
      ($scope.username === "7806017JA" && $scope.password === "7806017") || //	ARIEF WICAKSONO
      ($scope.username === "8913045ZJY" && $scope.password === "8913045") || //	ARISTO TITIS ADILO
      ($scope.username === "8814138ZJY" && $scope.password === "8814138") || //	ARIYANI ABDULLAH
      ($scope.username === "8911182JA" && $scope.password === "8911182") || //	ASEP SYARIP HIDAYAT
      ($scope.username === "8410101JA" && $scope.password === "8410101") || //	AWALUDIN AZIZ
      ($scope.username === "7906075JA" && $scope.password === "7906075") || //	BAMBANG SETIAWAN
      ($scope.username === "6594341K3" && $scope.password === "6594341") || //	BAMBANG SULAKSONO
      ($scope.username === "7193266K3" && $scope.password === "7193266") || //	BAMBANG SUPRIYATNO
      ($scope.username === "6492031Z" && $scope.password === "6492031") || //	BETON KARO SEKALI
      ($scope.username === "8911107JA" && $scope.password === "8911107") || //	BUDI UTOMO
      ($scope.username === "8008027JA" && $scope.password === "8008027") || //	CATUR BUDI PRASETYONO
      ($scope.username === "8710087JA" && $scope.password === "8710087") || //	CHARISMA REANDRIANTO
      ($scope.username === "8910029JA" && $scope.password === "8910029") || //	DENI SUBANDI
      ($scope.username === "7702012JA" && $scope.password === "7702012") || //	DENI SUSANTO
      ($scope.username === "7503032JA" && $scope.password === "7503032") || //	DODDY NAFIUDIN
      ($scope.username === "6685135K3" && $scope.password === "6685135") || //	EKO YULIANTO
      ($scope.username === "8610086JA" && $scope.password === "8610086") || //	ELLY RAHMAD
      ($scope.username === "7806112JA" && $scope.password === "7806112") || //	EMIEL ZAKKA NOOR AULIYA
      ($scope.username === "7806076JA" && $scope.password === "7806076") || //	ENDRIK PURBO YUNASTYO
      ($scope.username === "9013035ZJY" && $scope.password === "9013035") || //	ERLANGGA
      ($scope.username === "8207016JA" && $scope.password === "8207016") || //	ERWIN FIRMANSYAH
      ($scope.username === "8309030JA" && $scope.password === "8309030") || //	ETTY NUR AINI SA'ADAH
      ($scope.username === "8913036ZJY" && $scope.password === "8913036") || //	FARID ARDHI INDRASTO
      ($scope.username === "7806113JA" && $scope.password === "7806113") || //	FIRMAN NOVARIANTO
      ($scope.username === "8405110JA" && $scope.password === "8405110") || //	GAGUK WAHYUNI ASMARA
      ($scope.username === "8911181JA" && $scope.password === "8911181") || //	GILANG YURI WIBOWO
      ($scope.username === "8208098JA" && $scope.password === "8208098") || //	HARDIAN ARIEF WINANTO
      ($scope.username === "8006011JA" && $scope.password === "8006011") || //	HARRY PURNOMO
      ($scope.username === "6892179JA" && $scope.password === "6892179") || //	HARTANTO
      ($scope.username === "7192106K3" && $scope.password === "7192106") || //	HARTONO
      ($scope.username === "8310084JA" && $scope.password === "8310084") || //	HENDRAS DWI WAHYUDI
      ($scope.username === "7603027JA" && $scope.password === "7603027") || //	HENDRIE BASTIAN
      ($scope.username === "7503018JA" && $scope.password === "7503018") || //	HENRY PARIAMAN
      ($scope.username === "8911123JA" && $scope.password === "8911123") || //	HERI DWI SULISTIYONO
      ($scope.username === "9111185JA" && $scope.password === "9111185") || //	ILLYAS RENDY PURWANTO
      ($scope.username === "7806092JA" && $scope.password === "7806092") || //	IMAM KHOLIL
      ($scope.username === "7195045P" && $scope.password === "7195045") || //	IRVAN RAHMAT
      ($scope.username === "7393156JA" && $scope.password === "7393156") || //	JADI SILABAN
      ($scope.username === "8710044JA" && $scope.password === "8710044") || //	JONI ARIFIN
      ($scope.username === "8714125ZJY" && $scope.password === "8714125") || //	JORNALIS BAMBANG PRASTYANTO
      ($scope.username === "9111178JA" && $scope.password === "9111178") || //	JOVY SAMBORA
      ($scope.username === "7093116JA" && $scope.password === "7093116") || //	KASNADI
      ($scope.username === "8310080JA" && $scope.password === "8310080") || //	KETUT WISNU MAHENDRA
      ($scope.username === "8006085JA" && $scope.password === "8006085") || //	KUNTO WIBISONO
      ($scope.username === "8405107JA" && $scope.password === "8405107") || //	KUSWINARTO
      ($scope.username === "8609068JA" && $scope.password === "8609068") || //	LUTHFI ANANTA DZUNURAIN
      ($scope.username === "6792099K3" && $scope.password === "6792099") || //	MACHRIF HERIANSJAH
      ($scope.username === "8910030JA" && $scope.password === "8910030") || //	MAE NITTO BUDI KARSONO
      ($scope.username === "8409025JA" && $scope.password === "8409025") || //	MAHENDRA RISTANTO KURNIAWAN
      ($scope.username === "6692065Z" && $scope.password === "6692065") || //	MIFTAHUL JANNAH
      ($scope.username === "8305111JA" && $scope.password === "8305111") || //	MOCH. AGUS
      ($scope.username === "7494130JA" && $scope.password === "7494130") || //	MOCHAMAD YUNAN NASUTIYON
      ($scope.username === "8405108JA" && $scope.password === "8405108") || //	MUHAMAD SAIFUL HUDA
      ($scope.username === "9111183JA" && $scope.password === "9111183") || //	MUHAMMAD FATHONI
      ($scope.username === "9011187JA" && $scope.password === "9011187") || //	MUHAMMAD IHSAN
      ($scope.username === "7906074JA" && $scope.password === "7906074") || //	MUHAMMAD MURTADHO
      ($scope.username === "9111188JA" && $scope.password === "9111188") || //	MUHLAS
      ($scope.username === "7193114JA" && $scope.password === "7193114") || //	MUJIANTO
      ($scope.username === "8006072JA" && $scope.password === "8006072") || //	NOFRI PUSPITO WAHYUNINGTYAS
      ($scope.username === "8305022JA" && $scope.password === "8305022") || //	NUR HADI PURNOMO
      ($scope.username === "6585031JA" && $scope.password === "6585031") || //	NUR HIDAYAT
      ($scope.username === "6584380K3" && $scope.password === "6584380") || //	PADMONO
      ($scope.username === "9011121JA" && $scope.password === "9011121") || //	PRANOTO YULISTYO
      ($scope.username === "7403021JA" && $scope.password === "7403021") || //	PURWONO JATI AGUNG
      ($scope.username === "8306038JA" && $scope.password === "8306038") || //	R. KHOLILUL RAHMAN
      ($scope.username === "8610106JA" && $scope.password === "8610106") || //	RATNA PUSPITASARI
      ($scope.username === "8714127ZJY" && $scope.password === "8714127") || //	RISKI ADITYA
      ($scope.username === "7502023JA" && $scope.password === "7502023") || //	RONA NOVIARTHA NAULI SIREGAR
      ($scope.username === "9111189JA" && $scope.password === "9111189") || //	ROSID ARI SETIAWAN
      ($scope.username === "8710028JA" && $scope.password === "8710028") || //	RUBIYANTO
      ($scope.username === "7192109K3" && $scope.password === "7192109") || //	RUCHIYADI TARMADI
      ($scope.username === "7602006JA" && $scope.password === "7602006") || //	SATRIO WAHYUDI
      ($scope.username === "8207063JA" && $scope.password === "8207063") || //	SIGIT PRASETYO
      ($scope.username === "6892138K3" && $scope.password === "6892138") || //	SLAMET
      ($scope.username === "7394033JA" && $scope.password === "7394033") || //	SUBAGIO
      ($scope.username === "7292107K3" && $scope.password === "7292107") || //	SUDIYONO
      ($scope.username === "7292104K3" && $scope.password === "7292104") || //	SUMANTRI
      ($scope.username === "8405113JA" && $scope.password === "8405113") || //	SW. PUDJI BUDIARTO
      ($scope.username === "6793136Z" && $scope.password === "6793136") || //	THOMMI HAPOSAN
      ($scope.username === "8505109JA" && $scope.password === "8505109") || //	TINO SAPUTRA
      ($scope.username === "8610100JA" && $scope.password === "8610100") || //	TRI PERWITA SARI
      ($scope.username === "7092124K3" && $scope.password === "7092124") || //	TRIO SURYONO
      ($scope.username === "7502020JA" && $scope.password === "7502020") || //	TRIS PRAYOGO MUSLIM
      ($scope.username === "6484327K3" && $scope.password === "6484327") || //	TRIYONO
      ($scope.username === "7803039JA" && $scope.password === "7803039") || //	UBAEDI SUSANTO
      ($scope.username === "8911124JA" && $scope.password === "8911124") || //	ULIL ABSOR
      ($scope.username === "9114116ZJY" && $scope.password === "9114116") || //	VIOLA KHATULISTIWA
      ($scope.username === "8308134JA" && $scope.password === "8308134") || //	WAN VARIANI PERMATASARI
      ($scope.username === "7906016JA" && $scope.password === "7906016") || //	YAN SUPRAYOGI
      //------------------------------------Daftar Baru-------------------------------------------------------
      ($scope.username === "9419087ZJY" && $scope.password === "9419087") // DANY DWI JAKA SUDRAJAT
    ) {
      $scope.login1 = "Anda berhasil login...";
      Swal.fire("Selamat Datang " + $scope.username, "RAT Koperasi Online 2022", "success");
      setTimeout("location.href='dashboard.html'", 2000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops ...",
        text: "Maaf anda tidak terdaftar !",
        footer: "<a href=https://api.whatsapp.com/send?phone=+6289607719949&text=Help>Harap menghubungi panitia, Terima Kasih</a>",
      });
    }
    $scope.name = $scope.username;
    $scope.pass = $scope.password;
  };
});
