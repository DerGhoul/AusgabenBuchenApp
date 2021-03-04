
#!/usr/bin/gjs

imports.gi.versions.Gtk = "3.0";
const { Gio, Gtk } = imports.gi;

//Attribute
var descriptionentry;
var amountentry;
var dateentry;
var reasonentry;


class ImageViewerWindow {
    constructor(app) {
        this._app = app;
        this._window = null;
        this._hbox = null;
        this._vboxleft = null;
        this._vboxright = null;
        this._descriptionentry = null;
        this._amountentry = null;
        this._dateentry = null;
        this._reasonentry = null;
        this._textview = null;
        this._bookbutton = null;
        this._fileChooserButton = null;
        this._des = null;
    }

    _buildUI() {
        this._window = new Gtk.ApplicationWindow({
            application: this._app,
            defaultHeight: 400,
            defaultWidth: 800
        });


//Information: HorizontalBox left
        /////////////////////////////////////////////////////////
        this._hbox = new Gtk.Box({
          orientation: Gtk.Orientation.HORIZONTAL
          ///defaultWidth: 400
        });
        this._window.add(this._hbox);
        /////////////////////////////////////////////////////////

//Information: VerticalBox left
        /////////////////////////////////////////////////////////
        this._vboxleft = new Gtk.Box({
          orientation: Gtk.Orientation.VERTICAL
          ///defaultWidth: 400
        });
        this._hbox.add(this._vboxleft);
        /////////////////////////////////////////////////////////

//Information: VerticalBox rigth
        /////////////////////////////////////////////////////////
        this._vboxright = new Gtk.Box({
          orientation: Gtk.Orientation.VERTICAL
          //defaultWidth: 400
        });
        this._hbox.add(this._vboxright);
        /////////////////////////////////////////////////////////


//Information: all GtkObjekts for _vboxleft
        /////////////////////////////////////////////////////////
        this._descriptionentry = new Gtk.Entry({
          buffer: new Gtk.EntryBuffer()
        });
        this._vboxleft.add(this._descriptionentry);
        /////////////////////////////////////////////////////////
        this._amountentry =  new Gtk.Entry({
          buffer: new Gtk.EntryBuffer()
        });
        this._vboxleft.add(this._amountentry);
        /////////////////////////////////////////////////////////
        this._dateentry = new Gtk.Entry({
          buffer: new Gtk.EntryBuffer()
        });
        this._vboxleft.add(this._dateentry);
        /////////////////////////////////////////////////////////
        this._reasonentry = new Gtk.Entry({
          buffer: new Gtk.EntryBuffer()
        });
        this._vboxleft.add(this._reasonentry);
        /////////////////////////////////////////////////////////
        this._bookbutton = new Gtk.Button({
          label: 'buchen'
          //type: text
        });
       this._bookbutton.connect('clicked', () => {
          toSave();
          descriptionentry = this._descriptionentry.get_buffer().text;
          amountentry = this._amountentry.get_buffer().text;
          dateentry = this._dateentry.get_buffer().text;
          reasonentry = this._reasonentry.get_buffer().text;
        });
        this._vboxleft.add(this._bookbutton);
        /////////////////////////////////////////////////////////

//Information: all GtkObjekts for _vboxright
        /////////////////////////////////////////////////////////
        this._textview = new Gtk.TextView({

        });
        this._vboxright.add(this._textview);
        /////////////////////////////////////////////////////////
        this._des = new Gtk.Entry({
          //type: text
        });
        this._vboxright.add(this._des);
        /////////////////////////////////////////////////////////

//Attributinitialisierung









        this._hbox.show_all();
            this._window.show_all();


    }

    getWidget() {
        this._buildUI();
        return this._window;
    }







}

const application = new Gtk.Application({
    application_id: 'org.gnome.Sandbox.ImageViewerExample',
    flags: Gio.ApplicationFlags.FLAGS_NONE
});

application.connect('activate', app => {
    let activeWindow = app.activeWindow;

    if (!activeWindow) {
        let imageViewerWindow = new ImageViewerWindow(app);
        activeWindow = imageViewerWindow.getWidget();
    }

    activeWindow.present();
});

application.run(null);







//Methoden
function toString() {
  let description = descriptionentry;
  let amount = amountentry;
  let date = dateentry;
  let reason = reasonentry;

  let chain = (description+';'+amount+';'+date+';'+reason+';');
  log('Entry: '+chain)
  return chain;
}
function toSave(){
  let output = toString();
  _textview.set_buffer.text = output;
}
