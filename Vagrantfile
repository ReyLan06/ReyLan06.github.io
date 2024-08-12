Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  config.vm.hostname = "mi-servidor"
  config.vm.network "private_network",  ip: "192.168.56.4"
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
    vb.cpus = 1
  end
  config.vm.synced_folder "D:/_GitHub/_Proyecto_Final", "/vagrant/html", type: "virtualbox"

  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "D:/_GitHub/_Proyecto_Final/apache.yml"
    ansible.compatibility_mode = "2.0"
end
end